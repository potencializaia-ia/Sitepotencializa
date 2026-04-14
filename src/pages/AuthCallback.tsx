import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const finishLogin = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        navigate('/login', { replace: true });
        return;
      }

      if (data.session) {
        const redirectPath = localStorage.getItem('postLoginRedirect') || '/';
        localStorage.removeItem('postLoginRedirect');
        navigate(redirectPath, { replace: true });
      } else {
        navigate('/login', { replace: true });
      }
    };

    finishLogin();
  }, [navigate]);

  return null;
}