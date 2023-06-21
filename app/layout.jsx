import "../styles/globals.css";


export const metadata = {
  title: "MyAnimeList",
  description: "Never forget your favorite anime again!",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      {/* <Provider> */}
        <div className='main'>
          <div className='gradient' />
        </div>

        <main>
          {children}
        </main>
      {/* </Provider> */}
    </body>
  </html>
);

export default RootLayout;