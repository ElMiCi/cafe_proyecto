-- Tabla de suscriptores al newsletter
create table newsletter (
  id uuid default gen_random_uuid() primary key,
  email text not null unique,
  created_at timestamptz default now() not null
);

-- Tabla de mensajes de contacto
create table contacts (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz default now() not null
);

-- Habilitar Row Level Security
alter table newsletter enable row level security;
alter table contacts enable row level security;

-- Permitir INSERT desde el cliente (anon key) — solo insertar, no leer
create policy "Allow public insert newsletter"
  on newsletter for insert
  to anon
  with check (true);

create policy "Allow public insert contacts"
  on contacts for insert
  to anon
  with check (true);

-- Las lecturas solo se hacen desde el server (service_role) via API Route
-- No se necesitan políticas de SELECT para anon
