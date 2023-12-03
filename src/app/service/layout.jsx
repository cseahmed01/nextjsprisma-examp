// or Dynamic metadata
export async function generateMetadata() {
    return {
      title: 'Service',
    }
  }
const Layout = ({children}) => {
    return (
      <>
      {children}
      </>
    );
}

export default Layout;
