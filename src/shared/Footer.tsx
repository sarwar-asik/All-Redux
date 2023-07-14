

const Footer = () => {
    return (
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-white text-lg font-semibold mb-4">Column 1</h2>
              <ul className="text-gray-300">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </div>
            <div>
              <h2 className="text-white text-lg font-semibold mb-4">Column 2</h2>
              <ul className="text-gray-300">
                <li>Item 4</li>
                <li>Item 5</li>
                <li>Item 6</li>
              </ul>
            </div>
            <div>
              <h2 className="text-white text-lg font-semibold mb-4">Column 3</h2>
              <ul className="text-gray-300">
                <li>Item 7</li>
                <li>Item 8</li>
                <li>Item 9</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  