import type { Product } from '../types/product';
import type { Order } from '../types/order';

// Mock data for products
export const products: Product[] = [
  { id: 'p1', name: 'Logitech MX Master 3 Mouse', description: 'Advanced wireless mouse with ergonomic design and fast scrolling.', category: 'Electronics', price: 99.99, stock: 15, imageUrl: 'https://images.pexels.com/photos/1580896/pexels-photo-1580896.jpeg?auto=compress&w=400&q=80' },
  { id: 'p2', name: 'Sony WH-1000XM4 Headphones', description: 'Industry-leading noise canceling headphones with premium sound.', category: 'Electronics', price: 349.99, stock: 8, imageUrl: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&w=400&q=80' },
  { id: 'p3', name: 'Manduka Pro Yoga Mat', description: 'High-density yoga mat for superior joint protection and stability.', category: 'Fitness', price: 120.00, stock: 20, imageUrl: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&w=400&q=80' },
  { id: 'p4', name: 'Hydro Flask 32oz Water Bottle', description: 'Insulated stainless steel water bottle keeps drinks cold for 24 hours.', category: 'Fitness', price: 44.95, stock: 30, imageUrl: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&w=400&q=80' },
  { id: 'p5', name: 'Philips Hue Table Lamp', description: 'Smart table lamp with customizable color and brightness.', category: 'Home', price: 59.99, stock: 12, imageUrl: 'https://images.pexels.com/photos/205321/pexels-photo-205321.jpeg?auto=compress&w=400&q=80' },
  { id: 'p6', name: 'Flexispot Standing Desk', description: 'Height adjustable standing desk for ergonomic office setup.', category: 'Office', price: 299.99, stock: 10, imageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&w=400&q=80' },
  { id: 'p7', name: 'Herman Miller Aeron Chair', description: 'Iconic ergonomic office chair with adjustable lumbar support.', category: 'Office', price: 1195.00, stock: 5, imageUrl: 'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&w=400&q=80' },
  { id: 'p8', name: 'Nike Air Zoom Pegasus 38', description: 'Lightweight running shoes for daily training and comfort.', category: 'Fitness', price: 119.99, stock: 25, imageUrl: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&w=400&q=80' },
  { id: 'p9', name: 'Keurig K-Elite Coffee Maker', description: 'Single serve coffee brewer with iced coffee capability.', category: 'Home', price: 169.99, stock: 18, imageUrl: 'https://images.pexels.com/photos/585750/pexels-photo-585750.jpeg?auto=compress&w=400&q=80' },
  { id: 'p10', name: 'Apple Watch Series 7', description: 'Smart watch with fitness tracking and always-on display.', category: 'Electronics', price: 399.00, stock: 14, imageUrl: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&w=400&q=80' },
  { id: 'p11', name: 'Dell UltraSharp 27 Monitor', description: '27-inch QHD monitor with InfinityEdge and USB-C connectivity.', category: 'Electronics', price: 429.99, stock: 10, imageUrl: 'https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&w=400&q=80' },
  { id: 'p12', name: 'CamelBak Eddy+ Water Bottle', description: 'Spill-proof water bottle with easy carry handle.', category: 'Fitness', price: 16.00, stock: 40, imageUrl: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&w=400&q=80' },
  { id: 'p13', name: 'Adidas Powerlift 4 Shoes', description: 'Weightlifting shoes for stability and support.', category: 'Fitness', price: 100.00, stock: 22, imageUrl: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&w=400&q=80' },
  { id: 'p14', name: 'Instant Pot Duo 7-in-1', description: 'Multi-use programmable pressure cooker.', category: 'Home', price: 89.99, stock: 17, imageUrl: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=400&q=80' },
  { id: 'p15', name: 'Samsung Galaxy Buds Pro', description: 'True wireless earbuds with intelligent ANC.', category: 'Electronics', price: 199.99, stock: 19, imageUrl: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&w=400&q=80' },
  { id: 'p16', name: 'Liforme Yoga Mat', description: 'Eco-friendly yoga mat with alignment markers.', category: 'Fitness', price: 140.00, stock: 15, imageUrl: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&w=400&q=80' },
  { id: 'p17', name: 'Contigo Autoseal Travel Mug', description: 'Leak-proof travel mug keeps drinks hot for hours.', category: 'Home', price: 24.99, stock: 28, imageUrl: 'https://images.pexels.com/photos/585750/pexels-photo-585750.jpeg?auto=compress&w=400&q=80' },
  { id: 'p18', name: 'Apple MacBook Pro 14"', description: 'Powerful laptop with M1 Pro chip and Liquid Retina XDR display.', category: 'Electronics', price: 1999.00, stock: 7, imageUrl: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&w=400&q=80' },
  { id: 'p19', name: 'Under Armour Gym Bag', description: 'Durable duffle bag for gym and travel.', category: 'Fitness', price: 45.00, stock: 23, imageUrl: 'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&w=400&q=80' },
  { id: 'p20', name: 'Bose SoundLink Revolve+', description: 'Portable Bluetooth speaker with 360° sound.', category: 'Electronics', price: 299.00, stock: 13, imageUrl: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&w=400&q=80' },
  { id: 'p21', name: 'Fitbit Charge 5', description: 'Advanced fitness tracker with built-in GPS.', category: 'Fitness', price: 149.95, stock: 18, imageUrl: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&w=400&q=80' },
  { id: 'p22', name: 'Breville Barista Express', description: 'All-in-one espresso machine with grinder.', category: 'Home', price: 699.95, stock: 6, imageUrl: 'https://images.pexels.com/photos/585750/pexels-photo-585750.jpeg?auto=compress&w=400&q=80' },
  { id: 'p23', name: 'Garmin Forerunner 245', description: 'GPS running smartwatch with advanced training features.', category: 'Fitness', price: 299.99, stock: 11, imageUrl: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&w=400&q=80' },
  { id: 'p24', name: 'Dyson Pure Cool Air Purifier', description: 'HEPA air purifier and fan for cleaner air.', category: 'Home', price: 399.99, stock: 9, imageUrl: 'https://images.pexels.com/photos/3958952/pexels-photo-3958952.jpeg?auto=compress&w=400&q=80' },
  { id: 'p25', name: 'JBL Flip 5 Speaker', description: 'Waterproof portable Bluetooth speaker.', category: 'Electronics', price: 119.95, stock: 21, imageUrl: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&w=400&q=80' },
  { id: 'p26', name: 'Reebok Dumbbells Set', description: 'Pair of neoprene dumbbells for strength training.', category: 'Fitness', price: 29.99, stock: 35, imageUrl: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&w=400&q=80' },
  { id: 'p27', name: 'HP Envy 6055e Printer', description: 'All-in-one wireless color printer for home use.', category: 'Office', price: 129.99, stock: 16, imageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&w=400&q=80' },
  { id: 'p28', name: "S'well Stainless Steel Bottle", description: 'Triple-layered, vacuum-insulated bottle.', category: 'Fitness', price: 35.00, stock: 27, imageUrl: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&w=400&q=80' },
  { id: 'p29', name: 'Google Nest Mini', description: 'Smart speaker with Google Assistant.', category: 'Electronics', price: 49.00, stock: 24, imageUrl: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&w=400&q=80' },
  { id: 'p30', name: 'Lululemon Align Leggings', description: 'Buttery-soft leggings for yoga and everyday wear.', category: 'Fitness', price: 98.00, stock: 20, imageUrl: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&w=400&q=80' },
  { id: 'p31', name: 'Canon EOS M50 Camera', description: 'Mirrorless camera with interchangeable lenses.', category: 'Electronics', price: 649.00, stock: 8, imageUrl: 'https://images.pexels.com/photos/51383/camera-dslr-digital-camera-digital-51383.jpeg?auto=compress&w=400&q=80' },
  { id: 'p32', name: 'Theragun Mini', description: 'Portable muscle treatment massage gun.', category: 'Fitness', price: 199.00, stock: 14, imageUrl: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&w=400&q=80' },
  { id: 'p33', name: 'Echo Dot (4th Gen)', description: 'Smart speaker with Alexa voice assistant.', category: 'Electronics', price: 49.99, stock: 22, imageUrl: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&w=400&q=80' },
  { id: 'p34', name: 'NordicTrack T Series Treadmill', description: 'Folding treadmill with interactive personal training.', category: 'Fitness', price: 649.00, stock: 6, imageUrl: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&w=400&q=80' },
  { id: 'p35', name: 'Moleskine Classic Notebook', description: 'Hardcover notebook for notes and journaling.', category: 'Office', price: 19.95, stock: 32, imageUrl: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&w=400&q=80' },
  { id: 'p36', name: 'Brita Water Pitcher', description: 'Water filter pitcher for clean, great-tasting water.', category: 'Home', price: 32.99, stock: 18, imageUrl: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&w=400&q=80' },
  { id: 'p37', name: 'Samsung Galaxy Tab S7', description: 'High-performance Android tablet with S Pen.', category: 'Electronics', price: 649.99, stock: 11, imageUrl: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&w=400&q=80' },
  { id: 'p38', name: 'Bowflex SelectTech 552', description: 'Adjustable dumbbells for versatile strength training.', category: 'Fitness', price: 399.00, stock: 9, imageUrl: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&w=400&q=80' },
  { id: 'p39', name: 'iRobot Roomba 675', description: 'Wi-Fi connected robot vacuum for effortless cleaning.', category: 'Home', price: 249.99, stock: 13, imageUrl: 'https://images.pexels.com/photos/3958952/pexels-photo-3958952.jpeg?auto=compress&w=400&q=80' },
  { id: 'p40', name: 'Jabra Elite 75t Earbuds', description: 'Compact true wireless earbuds with great sound.', category: 'Electronics', price: 179.99, stock: 17, imageUrl: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&w=400&q=80' },
  { id: 'p41', name: 'Gaiam Essentials Yoga Block', description: 'Supportive foam block for yoga practice.', category: 'Fitness', price: 9.99, stock: 40, imageUrl: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&w=400&q=80' },
  { id: 'p42', name: 'Brother HL-L2350DW Printer', description: 'Compact monochrome laser printer for home office.', category: 'Office', price: 119.99, stock: 15, imageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&w=400&q=80' },
  { id: 'p43', name: 'Hydro Flask Standard Mouth', description: 'Insulated water bottle with flex cap.', category: 'Fitness', price: 34.95, stock: 29, imageUrl: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&w=400&q=80' },
  { id: 'p44', name: 'TP-Link Deco Mesh WiFi', description: 'Whole home mesh WiFi system for seamless coverage.', category: 'Electronics', price: 169.99, stock: 12, imageUrl: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&w=400&q=80' },
  { id: 'p45', name: 'Manduka Cork Yoga Block', description: 'Eco-friendly cork block for yoga support.', category: 'Fitness', price: 22.00, stock: 18, imageUrl: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&w=400&q=80' },
  { id: 'p46', name: 'Dyson V11 Torque Drive', description: 'Cordless vacuum cleaner with powerful suction.', category: 'Home', price: 599.99, stock: 7, imageUrl: 'https://images.pexels.com/photos/3958952/pexels-photo-3958952.jpeg?auto=compress&w=400&q=80' },
  { id: 'p47', name: 'Apple iPad Air', description: 'Lightweight tablet with powerful performance.', category: 'Electronics', price: 599.00, stock: 10, imageUrl: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&w=400&q=80' },
  { id: 'p48', name: 'Yeti Rambler Tumbler', description: 'Stainless steel tumbler with double-wall insulation.', category: 'Fitness', price: 29.99, stock: 26, imageUrl: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&w=400&q=80' },
  { id: 'p49', name: 'Sony SRS-XB12 Speaker', description: 'Extra bass portable Bluetooth speaker.', category: 'Electronics', price: 58.00, stock: 20, imageUrl: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&w=400&q=80' },
  { id: 'p50', name: 'Fit Simplify Resistance Bands', description: 'Set of 5 resistance loop exercise bands.', category: 'Fitness', price: 12.95, stock: 38, imageUrl: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&w=400&q=80' },
  { id: 'p51', name: 'Google Pixel Buds A-Series', description: 'Wireless earbuds with Google Assistant.', category: 'Electronics', price: 99.00, stock: 16, imageUrl: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&w=400&q=80' },
  { id: 'p52', name: 'NordicTrack Adjustable Dumbbells', description: 'Space-saving adjustable dumbbells for home gym.', category: 'Fitness', price: 299.00, stock: 14, imageUrl: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&w=400&q=80' },
  { id: 'p53', name: 'HP Pavilion 15 Laptop', description: 'Versatile laptop for work and entertainment.', category: 'Electronics', price: 649.99, stock: 9, imageUrl: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&w=400&q=80' },
  { id: 'p54', name: 'CamelBak Chute Mag Bottle', description: 'Magnetic cap water bottle for easy drinking.', category: 'Fitness', price: 13.00, stock: 33, imageUrl: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&w=400&q=80' },
  { id: 'p55', name: 'Samsung Galaxy Watch 4', description: 'Smartwatch with advanced health tracking.', category: 'Electronics', price: 249.99, stock: 13, imageUrl: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&w=400&q=80' },
  { id: 'p56', name: 'Gaiam Essentials Yoga Mat', description: 'Lightweight yoga mat for all levels.', category: 'Fitness', price: 21.98, stock: 27, imageUrl: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&w=400&q=80' },
  { id: 'p57', name: 'Anker PowerCore 10000', description: 'Ultra-compact portable charger for devices.', category: 'Electronics', price: 25.99, stock: 22, imageUrl: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&w=400&q=80' },
  { id: 'p58', name: 'Reebok Nano X1 Shoes', description: 'Versatile training shoes for all workouts.', category: 'Fitness', price: 130.00, stock: 19, imageUrl: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&w=400&q=80' },
  { id: 'p59', name: 'Keurig K-Slim Coffee Maker', description: 'Compact single serve coffee brewer.', category: 'Home', price: 109.99, stock: 15, imageUrl: 'https://images.pexels.com/photos/585750/pexels-photo-585750.jpeg?auto=compress&w=400&q=80' },
  { id: 'p60', name: 'Apple Magic Keyboard', description: 'Wireless keyboard with numeric keypad.', category: 'Electronics', price: 129.00, stock: 18, imageUrl: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&w=400&q=80' },
  { id: 'p61', name: 'Fitbit Inspire 2', description: 'Fitness tracker with 24/7 heart rate monitoring.', category: 'Fitness', price: 99.95, stock: 21, imageUrl: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&w=400&q=80' },
  { id: 'p62', name: 'Instant Vortex Air Fryer', description: '4-in-1 air fryer for quick and healthy meals.', category: 'Home', price: 89.99, stock: 17, imageUrl: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=400&q=80' },
  { id: 'p63', name: 'Garmin Venu Sq', description: 'GPS smartwatch with bright color display.', category: 'Fitness', price: 199.99, stock: 13, imageUrl: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&w=400&q=80' },
  { id: 'p64', name: 'Philips Wake-Up Light', description: 'Simulated sunrise alarm clock for better sleep.', category: 'Home', price: 99.95, stock: 12, imageUrl: 'https://images.pexels.com/photos/205321/pexels-photo-205321.jpeg?auto=compress&w=400&q=80' },
  { id: 'p65', name: 'Bowflex C6 Bike', description: 'Indoor cycling bike with Bluetooth connectivity.', category: 'Fitness', price: 999.00, stock: 5, imageUrl: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&w=400&q=80' },
  { id: 'p66', name: 'Sony Alpha a6400', description: 'Mirrorless digital camera with fast autofocus.', category: 'Electronics', price: 898.00, stock: 7, imageUrl: 'https://images.pexels.com/photos/51383/camera-dslr-digital-camera-digital-51383.jpeg?auto=compress&w=400&q=80' },
  { id: 'p67', name: 'Hydro Flask Wide Mouth', description: 'Insulated bottle with straw lid.', category: 'Fitness', price: 44.95, stock: 24, imageUrl: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&w=400&q=80' },
  { id: 'p68', name: 'TP-Link Smart Plug', description: 'WiFi outlet for smart home automation.', category: 'Home', price: 24.99, stock: 20, imageUrl: 'https://images.pexels.com/photos/205321/pexels-photo-205321.jpeg?auto=compress&w=400&q=80' },
  { id: 'p69', name: 'JBL Clip 4 Speaker', description: 'Ultra-portable waterproof Bluetooth speaker.', category: 'Electronics', price: 69.95, stock: 16, imageUrl: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&w=400&q=80' },
  { id: 'p70', name: 'Manduka eKO Lite Mat', description: 'Eco-friendly yoga mat for travel.', category: 'Fitness', price: 88.00, stock: 18, imageUrl: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&w=400&q=80' },
  { id: 'p71', name: 'Samsung T7 Portable SSD', description: 'Fast external solid state drive for storage.', category: 'Electronics', price: 109.99, stock: 14, imageUrl: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&w=400&q=80' },
  { id: 'p72', name: 'Yeti Hopper Flip 12', description: 'Soft cooler for outdoor adventures.', category: 'Fitness', price: 249.99, stock: 9, imageUrl: 'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&w=400&q=80' },
  { id: 'p73', name: 'Apple AirPods Pro', description: 'Active noise cancellation for immersive sound.', category: 'Electronics', price: 249.00, stock: 15, imageUrl: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&w=400&q=80' },
  { id: 'p74', name: 'NordicTrack RW900 Rower', description: 'Interactive rowing machine for home workouts.', category: 'Fitness', price: 1599.00, stock: 4, imageUrl: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&w=400&q=80' },
  { id: 'p75', name: 'Canon PIXMA TR4520', description: 'Wireless all-in-one photo printer.', category: 'Office', price: 99.99, stock: 13, imageUrl: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&w=400&q=80' },
  { id: 'p76', name: 'Brita Premium Filtering Bottle', description: 'Water bottle with built-in filter.', category: 'Fitness', price: 19.99, stock: 28, imageUrl: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&w=400&q=80' },
  { id: 'p77', name: 'Samsung Galaxy S21', description: 'Flagship Android smartphone with pro-grade camera.', category: 'Electronics', price: 799.99, stock: 10, imageUrl: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&w=400&q=80' },
  { id: 'p78', name: 'Liforme Travel Yoga Mat', description: 'Lightweight, portable yoga mat for travel.', category: 'Fitness', price: 124.95, stock: 12, imageUrl: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&w=400&q=80' },
  { id: 'p79', name: 'Apple MacBook Air M1', description: 'Ultra-thin laptop with Apple silicon.', category: 'Electronics', price: 999.00, stock: 8, imageUrl: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&w=400&q=80' },
  { id: 'p80', name: 'Contigo Kids Water Bottle', description: 'Leak-proof water bottle for kids.', category: 'Fitness', price: 12.99, stock: 30, imageUrl: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&w=400&q=80' },
  { id: 'p81', name: 'Sony WH-CH710N Headphones', description: 'Wireless noise canceling headphones.', category: 'Electronics', price: 128.00, stock: 17, imageUrl: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&w=400&q=80' },
  { id: 'p82', name: 'Fitbit Versa 3', description: 'Health & fitness smartwatch with built-in GPS.', category: 'Fitness', price: 229.95, stock: 14, imageUrl: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&w=400&q=80' },
  { id: 'p83', name: 'Keurig K-Classic Coffee Maker', description: 'Classic single serve coffee brewer.', category: 'Home', price: 79.99, stock: 19, imageUrl: 'https://images.pexels.com/photos/585750/pexels-photo-585750.jpeg?auto=compress&w=400&q=80' },
  { id: 'p84', name: 'Apple iMac 24"', description: 'All-in-one desktop with Retina display.', category: 'Electronics', price: 1299.00, stock: 6, imageUrl: 'https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&w=400&q=80' },
  { id: 'p85', name: 'Manduka PROlite Yoga Mat', description: 'Professional quality yoga mat for daily practice.', category: 'Fitness', price: 94.00, stock: 16, imageUrl: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&w=400&q=80' },
  { id: 'p86', name: 'HP EliteDisplay Monitor', description: 'Full HD monitor for business productivity.', category: 'Office', price: 199.99, stock: 11, imageUrl: 'https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&w=400&q=80' },
  { id: 'p87', name: 'Yeti Rambler Bottle', description: 'Durable stainless steel bottle for hydration.', category: 'Fitness', price: 39.99, stock: 22, imageUrl: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&w=400&q=80' },
  { id: 'p88', name: 'Google Nest Hub', description: 'Smart display with Google Assistant.', category: 'Electronics', price: 99.99, stock: 13, imageUrl: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&w=400&q=80' },
  { id: 'p89', name: 'Bowflex PR3000 Home Gym', description: 'Versatile home gym for strength training.', category: 'Fitness', price: 999.00, stock: 3, imageUrl: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&w=400&q=80' },
  { id: 'p90', name: 'Canon PowerShot G7 X', description: 'Compact digital camera for vlogging.', category: 'Electronics', price: 749.00, stock: 7, imageUrl: 'https://images.pexels.com/photos/51383/camera-dslr-digital-camera-digital-51383.jpeg?auto=compress&w=400&q=80' },
  { id: 'p91', name: 'Brita Stream Water Pitcher', description: 'Fast filtering water pitcher for home.', category: 'Home', price: 34.99, stock: 15, imageUrl: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&w=400&q=80' },
  { id: 'p92', name: 'Samsung Galaxy Buds Live', description: 'Wireless earbuds with active noise cancellation.', category: 'Electronics', price: 169.99, stock: 12, imageUrl: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&w=400&q=80' },
  { id: 'p93', name: 'Liforme Rainbow Yoga Mat', description: 'Colorful yoga mat for vibrant practice.', category: 'Fitness', price: 150.00, stock: 10, imageUrl: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&w=400&q=80' },
  { id: 'p94', name: 'Apple Mac Mini M1', description: 'Compact desktop with Apple silicon.', category: 'Electronics', price: 699.00, stock: 8, imageUrl: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&w=400&q=80' },
  { id: 'p95', name: 'Contigo Autospout Bottle', description: 'Spill-proof water bottle with straw.', category: 'Fitness', price: 14.99, stock: 25, imageUrl: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&w=400&q=80' },
  { id: 'p96', name: 'Sony WF-1000XM4 Earbuds', description: 'Industry-leading noise canceling earbuds.', category: 'Electronics', price: 279.99, stock: 11, imageUrl: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&w=400&q=80' },
  { id: 'p97', name: 'Fitbit Luxe', description: 'Fashion-forward fitness & wellness tracker.', category: 'Fitness', price: 149.95, stock: 13, imageUrl: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&w=400&q=80' },
  { id: 'p98', name: 'Keurig K-Supreme Plus', description: 'Customizable single serve coffee maker.', category: 'Home', price: 199.99, stock: 9, imageUrl: 'https://images.pexels.com/photos/585750/pexels-photo-585750.jpeg?auto=compress&w=400&q=80' },
  { id: 'p99', name: 'Apple iPad Pro 12.9"', description: 'Large screen tablet for productivity and creativity.', category: 'Electronics', price: 1099.00, stock: 6, imageUrl: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&w=400&q=80' },
  { id: 'p100', name: 'Manduka GRP Yoga Mat', description: 'Ultra-grippy mat for hot yoga.', category: 'Fitness', price: 130.00, stock: 8, imageUrl: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&w=400&q=80' },
];

// Generates mock orders
function generateMockOrders(products: Product[], count = 500): Order[] {
  const categories = Array.from(new Set(products.map(p => p.category)));
  const startDate = new Date();
  startDate.setFullYear(startDate.getFullYear() - 3);
  const orders: Order[] = [];
  for (let i = 0; i < count; i++) {
    // Spread dates evenly
    const date = new Date(startDate.getTime() + (i * (365 * 3 * 24 * 60 * 60 * 1000) / count));
    // Ensure every category and product is covered
    const category = categories[i % categories.length];
    const availableProducts = products.filter(p => p.category === category);
    const numItems = Math.floor(Math.random() * 5) + 1;
    const items = [];
    let total = 0;
    for (let j = 0; j < numItems; j++) {
      const prod = availableProducts[(i + j) % availableProducts.length];
      const quantity = Math.floor(Math.random() * 5) + 1;
      const unitPrice = prod.price;
      total += unitPrice * quantity;
      items.push({ productId: prod.id, quantity, unitPrice });
    }
    orders.push({
      id: `o${i + 1}`,
      date: date.toISOString(),
      items,
      total: parseFloat(total.toFixed(2)),
    });
  }
  return orders;
}

export const orders: Order[] = generateMockOrders(products, 500); 
