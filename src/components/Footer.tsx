import React from "react";
import Link from "next/link";
import { FileText, Heart, Target } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <FileText className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">DeadHand Notes</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              A secure platform for creating and scheduling important messages and notes 
              to be delivered to your loved ones at the right time. Preserve your thoughts, 
              memories, and important information for future generations.
            </p>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Learn More</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/about" 
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/mission" 
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Target className="w-4 h-4 mr-2" />
                  Our Mission
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/help" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} DeadHand Notes. All rights reserved. 
            <span className="block md:inline md:ml-2">
              Preserving memories for tomorrow.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
