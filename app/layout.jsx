import "../styles/globals.css";


export const metadata = {
  title: "MyBookList",
  description: "Never forget your favorite book again!",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      {/* <Provider> */}

      <main className='main'>
        <div>
          {children}
        </div>
      </main>
      {/* </Provider> */}
    </body>
  </html>
);

export default RootLayout;