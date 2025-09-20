import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Plywood Related Services
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Professional plywood services to meet your business needs
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Plywood Samples Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Plywood Samples for You
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    <strong>Please make Sure you have Your Own DHL or FedEx Account to Receive Plywood Sample from Us</strong>
                  </p>
                  <p>
                    Plywood free samples are small pieces of plywood that are offered by some plywood manufacturers or suppliers to potential customers or partners for free. Plywood free samples can help them evaluate the quality, design, and performance of the plywood products before making a purchase or a deal.
                  </p>
                </div>
                <div className="mt-8">
                  <Link 
                    href="/contact" 
                    className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Click Here to Contact Us for Plywood Samples Request
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/static/products/indonesian-meranti-plywood-distributor.png"
                    alt="Plywood free samples"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Plywood Pricelist Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Plywood Pricelist Quotation for You
              </h2>
              <p className="text-gray-600 text-lg max-w-4xl mx-auto">
                A plywood pricelist quotation From Mega Plywood Indonesia ( MPI ) is a document that shows the prices of different types and sizes of plywood products offered by a plywood manufacturer or supplier. A plywood pricelist quotation can help potential customers or partners compare and choose the best plywood products for their needs and budget.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                To ask a plywood pricelist quotation from us, you may need to consider the following factors:
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Material Quality</h4>
                    <p className="text-gray-600">
                      The source and quality of the plywood materials, such as the species, grade, and certification of the wood veneer
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Product Dimensions</h4>
                    <p className="text-gray-600">
                      The dimensions and thickness of the plywood products, such as the length, width, and number of plies
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Quantity & Availability</h4>
                    <p className="text-gray-600">
                      The quantity and availability of the plywood products, such as the minimum order, lead time, and stock status
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Delivery & Payment</h4>
                    <p className="text-gray-600">
                      The delivery and payment terms and conditions, such as the shipping method, cost, and duration, and the payment method, currency, and discount
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Information */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Pricing Options</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-green-700 mb-2">FOB Price</h4>
                    <p className="text-gray-600">Price for Shipment Until Indonesian Local Port</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-blue-700 mb-2">CIF Price</h4>
                    <p className="text-gray-600">Price for Shipment until Your Country Port</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link 
                href="/contact" 
                className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Click Here to Contact Us for Pricelist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
