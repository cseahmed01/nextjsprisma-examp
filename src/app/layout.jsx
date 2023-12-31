import Footer from "@/components/Footer";
import SiteNabar from "@/components/SiteNabar";
import Subscribe from "@/components/Subscribe";

 
import 'bootstrap/dist/css/bootstrap.min.css';
 
export async function generateMetadata(){
  const res=await fetch(process.env.BASE_URL+"api/SiteMeta/home");
  const JSON=await res.json();
  return{
      title:JSON[0]['title'],
      description:JSON[0]['description'],
      keywords:JSON[0]['keywords'],
      openGraph: {
          images: JSON[0]['image'],
      },
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
 
        <SiteNabar />
        {children}
        <Subscribe/>
        <Footer />
      </body>
    </html>
  );
}
