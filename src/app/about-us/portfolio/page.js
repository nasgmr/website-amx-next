import { redirect } from 'next/navigation';

export default function PortfolioIndex() {
  // Arahkan ke portofolio tahun paling baru
  redirect('/about-us/portfolio/2018');
}