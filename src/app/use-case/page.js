import { redirect } from 'next/navigation';

export default function UseCaseIndex() {
  // Langsung arahkan (redirect) otomatis ke tab default pilihanmu
  // Kamu bisa ganti 'infrastructure' dengan 'agri-forest' kalau mau
  redirect('/use-case/infrastructure');
}