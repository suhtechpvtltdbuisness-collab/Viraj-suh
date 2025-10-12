'use client';

import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Cash For Gold', href: '/services/cash-for-gold' },
    { name: 'Cash For Silver', href: '#services' },
    { name: 'Cash For Diamond', href: '#services' },
    { name: 'Doorstep Service', href: '#contact' },
    { name: 'Best Gold Buyer in Lajpat Nagar', href: '/best-gold-buyer-lajpat-nagar' },
    { name: 'Gold Rates Today', href: '/gold-rates-today' },
  ];

  const policies = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Cash for Gold Agreement', href: '#' },
    { name: 'Refund Policy', href: '#' },
  ];

  const services = [
    {
      title: 'Instant Cash for gold',
      description: 'Get instant cash against your gold, silver, and diamond jewelry with competitive interest rates.',
      timing: 'Available 24/7',
      icon: <Clock className="h-6 w-6 text-white" />
    },
    {
      title: 'Doorstep Service',
      description: 'Our experts visit your location for jewelry evaluation and cash for gold processing at your convenience.',
      timing: 'Mon-Sat: 9 AM - 8 PM',
      icon: <MapPin className="h-6 w-6 text-white" />
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: 'https://www.facebook.com/CashforgoldIndelhi', name: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', name: 'Twitter' },
    { icon: <Instagram className="h-5 w-5" />, href: 'https://www.instagram.com/cashforgold_delhi/#', name: 'Instagram' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', name: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Viraj Jewellers</h3>
                <p className="text-amber-200 text-sm">Trusted Since 1985</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for cash for gold. We provide instant cash against gold, silver, and diamond jewelry with complete transparency and security.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-amber-600 hover:bg-amber-700 p-2 rounded-full transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-amber-300">Our Services</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-amber-300 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-amber-300">Legal</h4>
            <ul className="space-y-3">
              {policies.map((policy) => (
                <li key={policy.name}>
                  <a
                    href={policy.href}
                    className="text-gray-300 hover:text-amber-300 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    <span>{policy.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-amber-300">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-500 mt-1" />
                <div className="text-gray-300">
                  <p>C-159,Roxy chowk, Veer Savarkar Marg, near Chicago-Pizza, near Chicago- Pizza, Lajpat Nagar II</p>
                  <p> New Delhi, Delhi 110024</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-500" />
                <span className="text-gray-300">+91-9810100561</span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-500" />
                <span className="text-gray-300">cashforgolddelhi@gmail.com</span>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-amber-500 mt-1" />
                <div className="text-gray-300">
                  <p>Mon-Sat: 10:00 AM - 7:00 PM</p>
                  <p>Sunday: Closed</p>
                  <p className="text-amber-300 font-semibold mt-1">Emergency: 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Options */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-gradient-to-r from-amber-600/20 to-yellow-600/20 rounded-xl p-6 border border-amber-500/30 hover:border-amber-400/50 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-600 group-hover:bg-amber-500 rounded-full p-3 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-white mb-2">{service.title}</h5>
                    <p className="text-gray-300 mb-2">{service.description}</p>
                    <div className="flex items-center space-x-2 text-amber-300">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm font-medium">{service.timing}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © 2025 Viraj Jewellers. All rights reserved. | Reg. No: MH/2025/JEWEL/001
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Licensed Money Lender</span>
              <span>•</span>
              <span>Authorize SBI Approver</span>
              <span>•</span>
              <span>Insured Storage</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
