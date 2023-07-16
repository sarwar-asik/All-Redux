

const Footer = () => {
    return (
      <footer className="bg-gray-800 lg:py-7">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-white text-lg font-semibold mb-4">Our Service</h2>
              <ul className="text-gray-300 font-mono">
                <li>Popular book</li>
                <li> Update Book</li>
                <li>Great Book</li>
              </ul>
            </div>
            <div>
              <h2 className="text-white text-lg font-semibold mb-4">Features</h2>
              <ul className="text-gray-300 font-mono">
                <li>Science Fiction</li>
                <li>Novel </li>
                <li>Poem</li>
              </ul>
            </div>
            <div>
              <h2 className="text-white text-lg font-semibold mb-4">Book Point</h2>
              <ul className="text-gray-300 font-mono">
                <li>Dhaka, BD</li>
                <li>Chattagram </li>
                <li>Maijdee, Noakhali </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  