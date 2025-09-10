import React from "react";
import { Heart, Users, Shield, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About DeadHand Notes</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting hearts across time by preserving and delivering your most important messages
            when they matter most.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              DeadHand Notes was born from a simple yet profound realization: some of our most 
              important conversations happen too late, and some of our deepest feelings remain 
              unexpressed until it's too late to share them.
            </p>
            <p>
              Founded in 2025, our platform emerged from the understanding that technology should 
              serve humanity's most fundamental need - connection. We believe that love, wisdom, 
              and important information shouldn't be lost when we can no longer share them directly.
            </p>
            <p>
              Whether it's a heartfelt message to a child on their wedding day, important passwords 
              and account information for family members, or simply words of encouragement for 
              difficult times ahead, DeadHand Notes ensures your voice can still be heard when 
              it's needed most.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Heart className="w-8 h-8 text-red-500 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Compassion</h3>
            </div>
            <p className="text-gray-700">
              We understand the emotional weight of the messages entrusted to us. Every feature 
              is designed with empathy and care for both the sender and recipient.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-blue-500 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Security</h3>
            </div>
            <p className="text-gray-700">
              Your messages and personal information are protected with enterprise-grade security. 
              We use end-to-end encryption to ensure privacy and confidentiality.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Clock className="w-8 h-8 text-green-500 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Reliability</h3>
            </div>
            <p className="text-gray-700">
              We guarantee that your messages will be delivered as scheduled. Our robust 
              infrastructure ensures your important communications reach their destination.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-purple-500 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Community</h3>
            </div>
            <p className="text-gray-700">
              We're building a community that values meaningful connections and understands 
              the importance of preserving relationships across time.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              We are committed to maintaining the highest standards of privacy, security, and 
              reliability. Your trust is the foundation of our service, and we work tirelessly 
              to honor that responsibility.
            </p>
            <p>
              Our team consists of security experts, software engineers, and professionals who 
              understand the sensitive nature of our service. We continuously improve our platform 
              while maintaining the simplicity and accessibility that makes it valuable to users 
              from all walks of life.
            </p>
            <p className="font-semibold text-gray-900">
              Because some messages are too important to leave to chance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
