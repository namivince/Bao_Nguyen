import React from 'react';
import { ShoppingCart, Heart, Search, Menu } from 'lucide-react';
import { products } from './data';
import { useCart } from './contexts/CartContext';
import { Cart } from './components/Cart';

function App() {
  const { state, dispatch } = useCart();
  const cartItemsCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (product: any) => {
    const button = document.getElementById(`add-to-cart-${product.id}`);
    if (button) {
      button.classList.add('animate-wiggle');
      setTimeout(() => {
        button.classList.remove('animate-wiggle');
      }, 500);
    }
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <div className="min-h-screen bg-[#F5F1ED]">
      {/* Navigation */}
      <nav className="bg-[#2C1810] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Menu className="h-6 w-6 text-[#D4A574] mr-4 cursor-pointer hover:text-white transition-colors" />
              <h1 className="text-2xl font-bold text-[#D4A574]">CoffeeVault</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Search className="h-6 w-6 text-[#D4A574] cursor-pointer hover:text-white transition-colors" />
              <Heart className="h-6 w-6 text-[#D4A574] cursor-pointer hover:text-white transition-colors" />
              <button 
                className="relative"
                onClick={() => dispatch({ type: 'TOGGLE_CART' })}
              >
                <ShoppingCart className="h-6 w-6 text-[#D4A574] cursor-pointer hover:text-white transition-colors" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#D4A574] text-[#2C1810] text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-5xl font-bold mb-4">Phạm Hồng Yến</h2>
            <p className="text-xl mb-8">Discover our carefully selected coffee varieties</p>
            <a 
              href="#coffee-guide" 
              className="inline-block bg-[#D4A574] text-[#2C1810] px-8 py-3 rounded-full font-semibold hover:bg-[#B88B5D] transition-colors transform hover:scale-105 transition-transform duration-300"
            >
              Explore Our Coffee
            </a>
          </div>
        </div>
      </div>

      {/* Coffee Guide Section */}
      <div id="coffee-guide" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2C1810] mb-4">Coffee Classifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Understanding coffee grades helps you choose the perfect bean for your taste. Here's our guide to coffee classifications.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#F5F1ED] rounded-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1610632380989-680fe40816c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Grade 1 Coffee"
                  className="w-full h-full object-cover transform hover:scale-105 transition-duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2C1810] mb-3">Grade 1 - Premium</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Less than 5 defects per 300g sample</li>
                  <li>• No primary defects allowed</li>
                  <li>• Optimal moisture content (10-12%)</li>
                  <li>• Uniform bean size (screen size 15+)</li>
                  <li>• Exceptional cup quality</li>
                </ul>
                <p className="mt-4 text-sm text-[#D4A574]">Perfect for: Specialty coffee shops, single-origin brewing</p>
              </div>
            </div>

            <div className="bg-[#F5F1ED] rounded-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1587985064135-0366536eab42?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Grade 2 Coffee"
                  className="w-full h-full object-cover transform hover:scale-105 transition-duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2C1810] mb-3">Grade 2 - Premium Commercial</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 5-8 defects per 300g sample</li>
                  <li>• Maximum 3 quakers allowed</li>
                  <li>• Good moisture content (10-12.5%)</li>
                  <li>• Mostly uniform size (screen size 14+)</li>
                  <li>• Very good cup quality</li>
                </ul>
                <p className="mt-4 text-sm text-[#D4A574]">Perfect for: Daily brewing, coffee shops, blends</p>
              </div>
            </div>

            <div className="bg-[#F5F1ED] rounded-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Grade 3 Coffee"
                  className="w-full h-full object-cover transform hover:scale-105 transition-duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2C1810] mb-3">Grade 3 - Exchange Grade</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 9-23 defects per 300g sample</li>
                  <li>• Some irregularities allowed</li>
                  <li>• Acceptable moisture (10-13%)</li>
                  <li>• Varied bean size (screen size 13+)</li>
                  <li>• Good cup quality</li>
                </ul>
                <p className="mt-4 text-sm text-[#D4A574]">Perfect for: Commercial use, everyday blends</p>
              </div>
            </div>
          </div>

          <div className="bg-[#2C1810] text-white p-8 rounded-lg mt-12">
            <h3 className="text-2xl font-bold mb-6">Key Differences Between Grades</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-[#D4A574] font-semibold mb-2">Bean Quality</h4>
                <p className="text-sm">Grade 1 has zero defects and perfect uniformity, Grade 2 allows minor variations, Grade 3 accepts more variations while maintaining good quality.</p>
              </div>
              <div>
                <h4 className="text-[#D4A574] font-semibold mb-2">Flavor Profile</h4>
                <p className="text-sm">Grade 1 offers complex, distinct flavors. Grade 2 provides balanced, good flavors. Grade 3 delivers consistent, standard taste.</p>
              </div>
              <div>
                <h4 className="text-[#D4A574] font-semibold mb-2">Price Point</h4>
                <p className="text-sm">Prices reflect quality: Grade 1 commands premium prices, Grade 2 offers good value, Grade 3 provides economic options.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-[#2C1810] mb-4">Our Premium Coffee Selection</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">Choose from our carefully curated selection of premium coffee beans, each with its unique character and flavor profile.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <button className="absolute top-4 right-4">
                  <Heart className="h-6 w-6 text-white hover:text-[#D4A574] transition-colors transform hover:scale-110" />
                </button>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-[#2C1810] mb-2 group-hover:text-[#D4A574] transition-colors">{product.name}</h4>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-[#2C1810]">${product.price}</span>
                  <button 
                    id={`add-to-cart-${product.id}`}
                    onClick={() => handleAddToCart(product)}
                    className="bg-[#2C1810] text-white px-4 py-2 rounded-full hover:bg-[#D4A574] transition-colors transform hover:scale-105 active:scale-95 transition-transform duration-150"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Cart />
    </div>
  );
}

export default App;