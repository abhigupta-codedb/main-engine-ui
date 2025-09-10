import React from "react";
import { Shield, Lock, Eye, Database, FileText } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy is our priority. Learn how we protect and handle your personal information.
          </p>
        </div>

        {/* Last Updated */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <p className="text-blue-800">
            <strong>Last updated:</strong> September 10, 2025
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              At DeadHand Notes, we understand that privacy is fundamental to the trust you place 
              in us when sharing your most personal messages and information. This Privacy Policy 
              explains how we collect, use, protect, and share your information when you use our service.
            </p>
            <p>
              By using DeadHand Notes, you agree to the collection and use of information in 
              accordance with this policy.
            </p>
          </div>
        </div>

        {/* Information We Collect */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Database className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Name and contact information</li>
                <li>Email address for account management</li>
                <li>Phone number (optional)</li>
                <li>Account credentials</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Message Content</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Text content of your notes</li>
                <li>Attached images and files</li>
                <li>Recipient information</li>
                <li>Delivery scheduling preferences</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Usage Information</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Log data and access times</li>
                <li>Device and browser information</li>
                <li>IP addresses (anonymized)</li>
                <li>Feature usage analytics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How We Use Information */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Eye className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
          </div>
          
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Delivery</h3>
              <p>We use your information to deliver your messages according to your specified schedule and preferences.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Management</h3>
              <p>To maintain your account, provide customer support, and communicate important service updates.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Security</h3>
              <p>To protect against fraud, unauthorized access, and to maintain the security of our service.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Improvement</h3>
              <p>To analyze usage patterns and improve our service (using anonymized data only).</p>
            </div>
          </div>
        </div>

        {/* Data Protection */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Lock className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Data Protection</h2>
          </div>
          
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Encryption</h3>
              <p>All your messages and personal data are encrypted both in transit and at rest using industry-standard encryption.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Access Controls</h3>
              <p>Strict access controls ensure that only authorized personnel can access systems, and never the content of your messages.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Retention</h3>
              <p>We retain your data only as long as necessary to provide our service or as required by law.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Third Parties</h3>
              <p>We do not sell, trade, or share your personal information with third parties for marketing purposes.</p>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <FileText className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Access</h3>
              <p className="text-gray-700">Request access to your personal data</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Correction</h3>
              <p className="text-gray-700">Update or correct your information</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Deletion</h3>
              <p className="text-gray-700">Request deletion of your account and data</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Portability</h3>
              <p className="text-gray-700">Export your data in a portable format</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="space-y-2 text-gray-700">
            <p><strong>Email:</strong> privacy@deadhandnotes.com</p>
            <p><strong>Address:</strong> 123 Privacy Lane, Secure City, SC 12345</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  );
}
