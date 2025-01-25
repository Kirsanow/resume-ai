const footerNavigation = {
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Contact Us", href: "#" },
  ],
};

export default function Footer() {
  return (
    <div className="px-6 mx-auto mt-32 max-w-7xl lg:px-8">
      <footer
        aria-labelledby="footer-heading"
        className="relative py-12 border-t border-gray-900/10 sm:py-16"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="flex flex-col gap-6 justify-between items-center sm:flex-row">
          <div className="flex gap-2 items-center">
            <img
              alt="Resumix"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8"
            />
            <span className="text-sm text-gray-500">
              © {new Date().getFullYear()} Resumix. All rights reserved.
            </span>
          </div>
          <ul role="list" className="flex gap-8">
            {footerNavigation.legal.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}
