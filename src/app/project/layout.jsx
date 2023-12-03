// or Dynamic metadata
export async function generateMetadata() {
    return {
      title: 'Project',
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
