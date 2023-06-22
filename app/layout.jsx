import "../styles/globals.css";
import Login from "../components/Login";

export const metadata = {
  title: "Wizardry",
  description: "A wizarding world",
};


const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
    <Login />
      <main className='main'>
        <div>
          {children}
        </div>
      </main>
    </body>
  </html>
);

export default RootLayout;