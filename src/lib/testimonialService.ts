import { supabase } from './supabaseClient';

export interface Testimonial {
  id: number;
  label: string;
  quote: string;
  name: string;
  company: string;
  avatar: string;
  isUserSubmitted?: boolean;
  created_at?: string;
}

export async function fetchUserTestimonials(): Promise<Testimonial[]> {
  try {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return (data || []).map((item: any) => ({
      id: item.id,
      label: item.label,
      quote: item.quote,
      name: item.name,
      company: item.company,
      avatar: item.avatar,
      isUserSubmitted: true,
      created_at: item.created_at,
    }));
  } catch (error) {
    console.error('Erro ao buscar testimonials:', error);
    return [];
  }
}

export async function submitTestimonial(testimonial: Omit<Testimonial, 'id' | 'created_at'>): Promise<Testimonial | null> {
  try {
    const { data, error } = await supabase
      .from('testimonials')
      .insert([
        {
          label: testimonial.label,
          quote: testimonial.quote,
          name: testimonial.name,
          company: testimonial.company,
          avatar: testimonial.avatar,
        },
      ])
      .select();

    if (error) throw error;

    if (data && data.length > 0) {
      return {
        id: data[0].id,
        label: data[0].label,
        quote: data[0].quote,
        name: data[0].name,
        company: data[0].company,
        avatar: data[0].avatar,
        isUserSubmitted: true,
        created_at: data[0].created_at,
      };
    }

    return null;
  } catch (error) {
    console.error('Erro ao enviar testimonial:', error);
    throw error;
  }
}

export async function deleteTestimonial(id: number): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('testimonials')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Erro ao deletar testimonial:', error);
    return false;
  }
}
