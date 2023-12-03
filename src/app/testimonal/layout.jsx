// or Dynamic metadata
export async function generateMetadata() {
    return {
      title: 'Testimonial',
    }
  }

const Layout = ({ children}) => {
    return (
      <>
      {children}
      </>
    );
}

export default Layout;
