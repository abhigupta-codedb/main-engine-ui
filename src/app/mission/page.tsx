import React from "react";
import { Target, Globe, Lock, Heart, CheckCircle } from "lucide-react";

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Target className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To bridge the gap between present intentions and future needs through secure, 
            reliable message delivery technology.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Mission Statement</h2>
          <div className="text-lg text-gray-700 leading-relaxed">
            <p className="mb-4">
              <strong>DeadHand Notes exists to ensure that important messages, memories, and 
              information can transcend time and reach their intended recipients when they 
              need them most.</strong>
            </p>
            <p>
              We believe that everyone deserves the opportunity to communicate their love, 
              share their wisdom, and provide crucial information to future generations, 
              regardless of life's uncertainties.
            </p>
          </div>
        </div>

        {/* Core Objectives */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Core Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-red-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Preserve Relationships</h3>
              </div>
              <p className="text-gray-700">
                Enable meaningful connections that persist beyond physical presence, allowing 
                love and care to be expressed at exactly the right moment.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Lock className="w-8 h-8 text-blue-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Protect Privacy</h3>
              </div>
              <p className="text-gray-700">
                Maintain the highest standards of security and privacy, ensuring that personal 
                messages remain confidential until their intended delivery time.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-green-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Universal Access</h3>
              </div>
              <p className="text-gray-700">
                Make our service accessible to people from all backgrounds and technical 
                skill levels, with simple, intuitive interfaces.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-8 h-8 text-purple-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Ensure Reliability</h3>
              </div>
              <p className="text-gray-700">
                Guarantee that messages will be delivered as intended, with redundant systems 
                and fail-safes to prevent loss of important communications.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              We envision a world where important conversations are never lost to time, where 
              wisdom can be passed down through generations, and where love can be expressed 
              exactly when it's needed most.
            </p>
            <p>
              In this world, families stay connected across time, important information is 
              never lost, and the fear of leaving things unsaid becomes a thing of the past.
            </p>
            <p>
              We see DeadHand Notes as more than a service—it's a bridge between generations, 
              a guardian of memories, and a testament to the enduring power of human connection.
            </p>
          </div>
        </div>

        {/* How We Achieve This */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Achieve This</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                <span className="text-blue-600 font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Advanced Technology</h3>
                <p className="text-gray-700">
                  Utilizing cutting-edge encryption, cloud infrastructure, and automated 
                  delivery systems to ensure messages reach their destination.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                <span className="text-blue-600 font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">User-Centric Design</h3>
                <p className="text-gray-700">
                  Creating intuitive interfaces that make complex scheduling and security 
                  features accessible to everyone.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                <span className="text-blue-600 font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Continuous Improvement</h3>
                <p className="text-gray-700">
                  Regularly updating our platform based on user feedback and evolving 
                  security requirements.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                <span className="text-blue-600 font-bold text-sm">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Community Building</h3>
                <p className="text-gray-700">
                  Fostering a community that values meaningful connections and supports 
                  users in their journey of preserving important messages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
