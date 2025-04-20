export interface User {
    id?: number;
    username?: string;
    password?: string;  // opcional si no siempre se envía de vuelta
    email?: string;
    name?: string;
    last_name?: string;
    phone?: string;
    pfp?: string; // imagen de perfil
    is_active?: boolean;
    is_staff?: boolean;
  }
  