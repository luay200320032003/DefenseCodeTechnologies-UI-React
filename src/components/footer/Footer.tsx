
export default function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-white border-t mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-700 to-indigo-700 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">GOV</span>
                </div>
                <span className="text-lg font-medium">GovWeb Solutions</span>
              </div>
              <p className="text-sm text-gray-600">
                Professional web development services exclusively for government agencies.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Portal Development</li>
                <li>Compliance Solutions</li>
                <li>Security Audits</li>
                <li>Accessibility Testing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Compliance</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Section 508</li>
                <li>WCAG 2.1 AA</li>
                <li>FedRAMP</li>
                <li>NIST 800-53</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Contact</h3>
              <p className="text-sm text-gray-600">
                Email: contracts@govweb.com<br />
                Phone: (555) GOV-WEBS<br />
                DUNS: 123456789
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
            © 2026 Government Web Solutions. Certified GSA Schedule Contractor.
          </div>
        </div>
      </footer>
    </div>
  )
}
