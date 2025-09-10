import React from "react";
import { FileText, Scale, CheckCircle, AlertTriangle } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Scale className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Please read these terms carefully before using DeadHand Notes.
          </p>
        </div>

        {/* Last Updated */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <p className="text-blue-800">
            <strong>Last updated:</strong> September 10, 2025
          </p>
        </div>

        {/* Agreement */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Agreement to Terms</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              By accessing and using DeadHand Notes ("the Service"), you accept and agree to be 
              bound by the terms and provision of this agreement. If you do not agree to abide 
              by the above, please do not use this service.
            </p>
            <p>
              These Terms of Service govern your use of the website located at deadhandnotes.com 
              and any related services provided by DeadHand Notes.
            </p>
          </div>
        </div>

        {/* Service Description */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <FileText className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Service Description</h2>
          </div>
          
          <div className="space-y-4 text-gray-700">
            <p>
              DeadHand Notes is a message scheduling and delivery service that allows users to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Create and compose messages, notes, and attachments</li>
              <li>Schedule delivery of messages to specified recipients</li>
              <li>Set delivery conditions based on fixed dates or other triggers</li>
              <li>Manage recipient lists and contact information</li>
              <li>Access message creation and management tools</li>
            </ul>
          </div>
        </div>

        {/* User Responsibilities */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">User Responsibilities</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Account Security</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>You are responsible for maintaining the security of your account</li>
                <li>You must provide accurate and complete information</li>
                <li>You must keep your login credentials confidential</li>
                <li>You must notify us immediately of any unauthorized access</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Content Standards</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Content must not be illegal, harmful, or offensive</li>
                <li>You must have the right to share any content you upload</li>
                <li>Content must not violate any third-party rights</li>
                <li>You are solely responsible for the content of your messages</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Recipient Consent</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>You must have consent to send messages to recipients</li>
                <li>Recipients must be aware they may receive messages from you</li>
                <li>You must respect recipients' wishes to opt out</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Prohibited Uses */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Prohibited Uses</h2>
          </div>
          
          <div className="space-y-4 text-gray-700">
            <p>You may not use our service:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>For any unlawful purpose or to solicit others to unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
              <li>To upload or transmit viruses or any other type of malicious code</li>
              <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
              <li>For any obscene or immoral purpose</li>
              <li>To interfere with or circumvent the security features of the service</li>
            </ul>
          </div>
        </div>

        {/* Service Availability */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Availability</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              We strive to provide reliable service, but we cannot guarantee 100% uptime. 
              The service may be temporarily unavailable due to maintenance, technical issues, 
              or circumstances beyond our control.
            </p>
            <p>
              We reserve the right to modify, suspend, or discontinue any part of the service 
              at any time with reasonable notice to users.
            </p>
          </div>
        </div>

        {/* Limitation of Liability */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              In no event shall DeadHand Notes, nor its directors, employees, partners, agents, 
              suppliers, or affiliates, be liable for any indirect, incidental, special, 
              consequential, or punitive damages, including without limitation, loss of profits, 
              data, use, goodwill, or other intangible losses, resulting from your use of the service.
            </p>
            <p>
              Our liability to you for any cause whatsoever and regardless of the form of the 
              action, will at all times be limited to the amount paid, if any, by you to us 
              for the service during the term of your use.
            </p>
          </div>
        </div>

        {/* Changes to Terms */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms 
              at any time. If a revision is material, we will try to provide at least 30 days 
              notice prior to any new terms taking effect.
            </p>
            <p>
              Your continued use of the service after any such changes constitutes your 
              acceptance of the new Terms of Service.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="space-y-2 text-gray-700">
            <p><strong>Email:</strong> legal@deadhandnotes.com</p>
            <p><strong>Address:</strong> 123 Legal Street, Terms City, TC 12345</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  );
}
