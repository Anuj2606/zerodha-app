
const Footer = () => {
  return (
    <div className="bg-gray-100 text-gray-700 text-sm mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company */}
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1">
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li><a href="/pricing" className="hover:underline">Pricing</a></li>
            <li><a href="/careers" className="hover:underline">Careers</a></li>
            <li><a href="/media" className="hover:underline">Press & Media</a></li>
            <li><a href="/csr" className="hover:underline">Zerodha Cares (CSR)</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-2">Support</h3>
          <ul className="space-y-1">
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="https://support.zerodha.com" className="hover:underline">Support Portal</a></li>
            <li><a href="/z-connect" className="hover:underline">Z-Connect Blog</a></li>
            <li><a href="/downloads" className="hover:underline">Downloads & Resources</a></li>
            <li><a href="/charges" className="hover:underline">List of Charges</a></li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className="font-semibold mb-2">Account</h3>
          <ul className="space-y-1">
            <li><a href="/open-account" className="hover:underline">Open an Account</a></li>
            <li><a href="/fund-transfer" className="hover:underline">Fund Transfer</a></li>
            <li><a href="/referral" className="hover:underline">Referral Program</a></li>
          </ul>
        </div>

        {/* Education */}
        <div>
          <h3 className="font-semibold mb-2">Education</h3>
          <ul className="space-y-1">
            <li><a href="/varsity" className="hover:underline">Varsity</a></li>
            <li><a href="https://tradingqna.com" className="hover:underline">Trading Q&A</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-8 py-4 text-center text-xs text-gray-500">
        <p>© 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
        <p className="mt-1">
          Investments in securities market are subject to market risks. Read all the related documents carefully before investing.
        </p>
      </div>
    </div>
  );
};

export default Footer;
