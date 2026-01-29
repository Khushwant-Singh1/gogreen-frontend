"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

import axios from "axios";

// ... (existing imports)

const ContactPage = () => {
  const [status, setStatus] = React.useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const data = {
      name: `${firstName} ${lastName}`,
      countryCode: formData.get("countryCode"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      await axios.post("/api/contact", data);
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-whitesmoke">
      <Navbar />
      <PageHeader 
        title="Contact Us" 
        backgroundImage="/img/Drip-header.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", active: true }
        ]}
      />
      
      <div className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Contact Info */}
          <div className="bg-gray-900 text-white p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <p className="mb-12 text-gray-400">
              We&apos;re here to help! Reach out to us for any inquiries about our products or services.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-6 shrink-0">
                  <i className="fa fa-map-marker-alt text-primary text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Our Office</h4>
                  <p className="text-gray-400">123 Irrigation Way, Agri Tech Park, Industrial Area, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-6 shrink-0">
                  <i className="fa fa-envelope text-primary text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Email Us</h4>
                  <p className="text-gray-400">info@vidhienterprises.com</p>
                  <p className="text-gray-400">support@vidhienterprises.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-6 shrink-0">
                  <i className="fa fa-phone-alt text-primary text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Call Us</h4>
                  <p className="text-gray-400">+91 98765 43210</p>
                  <p className="text-gray-400">+91 12345 67890</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-8 lg:p-12">
             <h2 className="text-3xl font-bold mb-6 text-gray-900">Send Message</h2>
             <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" name="firstName" required placeholder="First Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  <input type="text" name="lastName" required placeholder="Last Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex gap-2">
                    <select 
                      name="countryCode" 
                      required 
                      defaultValue="+91"
                      className="px-3 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="+93">🇦🇫 +93</option>
                      <option value="+355">🇦🇱 +355</option>
                      <option value="+213">🇩🇿 +213</option>
                      <option value="+376">🇦🇩 +376</option>
                      <option value="+244">🇦🇴 +244</option>
                      <option value="+54">🇦🇷 +54</option>
                      <option value="+374">🇦🇲 +374</option>
                      <option value="+61">🇦🇺 +61</option>
                      <option value="+43">🇦🇹 +43</option>
                      <option value="+994">🇦🇿 +994</option>
                      <option value="+973">🇧🇭 +973</option>
                      <option value="+880">🇧🇩 +880</option>
                      <option value="+375">🇧🇾 +375</option>
                      <option value="+32">🇧🇪 +32</option>
                      <option value="+501">🇧🇿 +501</option>
                      <option value="+229">🇧🇯 +229</option>
                      <option value="+975">🇧🇹 +975</option>
                      <option value="+591">🇧🇴 +591</option>
                      <option value="+387">🇧🇦 +387</option>
                      <option value="+267">🇧🇼 +267</option>
                      <option value="+55">🇧🇷 +55</option>
                      <option value="+673">🇧🇳 +673</option>
                      <option value="+359">🇧🇬 +359</option>
                      <option value="+226">🇧🇫 +226</option>
                      <option value="+257">🇧🇮 +257</option>
                      <option value="+855">🇰🇭 +855</option>
                      <option value="+237">🇨🇲 +237</option>
                      <option value="+1">🇨🇦 +1</option>
                      <option value="+56">🇨🇱 +56</option>
                      <option value="+86">🇨🇳 +86</option>
                      <option value="+57">🇨🇴 +57</option>
                      <option value="+506">🇨🇷 +506</option>
                      <option value="+385">🇭🇷 +385</option>
                      <option value="+53">🇨🇺 +53</option>
                      <option value="+357">🇨🇾 +357</option>
                      <option value="+420">🇨🇿 +420</option>
                      <option value="+45">🇩🇰 +45</option>
                      <option value="+253">🇩🇯 +253</option>
                      <option value="+593">🇪🇨 +593</option>
                      <option value="+20">🇪🇬 +20</option>
                      <option value="+503">🇸🇻 +503</option>
                      <option value="+240">🇬🇶 +240</option>
                      <option value="+291">🇪🇷 +291</option>
                      <option value="+372">🇪🇪 +372</option>
                      <option value="+251">🇪🇹 +251</option>
                      <option value="+358">🇫🇮 +358</option>
                      <option value="+33">🇫🇷 +33</option>
                      <option value="+241">🇬🇦 +241</option>
                      <option value="+220">🇬🇲 +220</option>
                      <option value="+995">🇬🇪 +995</option>
                      <option value="+49">🇩🇪 +49</option>
                      <option value="+233">🇬🇭 +233</option>
                      <option value="+30">🇬🇷 +30</option>
                      <option value="+502">🇬🇹 +502</option>
                      <option value="+224">🇬🇳 +224</option>
                      <option value="+592">🇬🇾 +592</option>
                      <option value="+509">🇭🇹 +509</option>
                      <option value="+504">🇭🇳 +504</option>
                      <option value="+852">🇭🇰 +852</option>
                      <option value="+36">🇭🇺 +36</option>
                      <option value="+354">🇮🇸 +354</option>
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+62">🇮🇩 +62</option>
                      <option value="+98">🇮🇷 +98</option>
                      <option value="+964">🇮🇶 +964</option>
                      <option value="+353">🇮🇪 +353</option>
                      <option value="+972">🇮🇱 +972</option>
                      <option value="+39">🇮🇹 +39</option>
                      <option value="+225">🇨🇮 +225</option>
                      <option value="+81">🇯🇵 +81</option>
                      <option value="+962">🇯🇴 +962</option>
                      <option value="+7">🇰🇿 +7</option>
                      <option value="+254">🇰🇪 +254</option>
                      <option value="+965">🇰🇼 +965</option>
                      <option value="+996">🇰🇬 +996</option>
                      <option value="+856">🇱🇦 +856</option>
                      <option value="+371">🇱🇻 +371</option>
                      <option value="+961">🇱🇧 +961</option>
                      <option value="+266">🇱🇸 +266</option>
                      <option value="+231">🇱🇷 +231</option>
                      <option value="+218">🇱🇾 +218</option>
                      <option value="+423">🇱🇮 +423</option>
                      <option value="+370">🇱🇹 +370</option>
                      <option value="+352">🇱🇺 +352</option>
                      <option value="+853">🇲🇴 +853</option>
                      <option value="+389">🇲🇰 +389</option>
                      <option value="+261">🇲🇬 +261</option>
                      <option value="+265">🇲🇼 +265</option>
                      <option value="+60">🇲🇾 +60</option>
                      <option value="+960">🇲🇻 +960</option>
                      <option value="+223">🇲🇱 +223</option>
                      <option value="+356">🇲🇹 +356</option>
                      <option value="+52">🇲🇽 +52</option>
                      <option value="+373">🇲🇩 +373</option>
                      <option value="+377">🇲🇨 +377</option>
                      <option value="+976">🇲🇳 +976</option>
                      <option value="+382">🇲🇪 +382</option>
                      <option value="+212">🇲🇦 +212</option>
                      <option value="+258">🇲🇿 +258</option>
                      <option value="+95">🇲🇲 +95</option>
                      <option value="+264">🇳🇦 +264</option>
                      <option value="+977">🇳🇵 +977</option>
                      <option value="+31">🇳🇱 +31</option>
                      <option value="+64">🇳🇿 +64</option>
                      <option value="+505">🇳🇮 +505</option>
                      <option value="+227">🇳🇪 +227</option>
                      <option value="+234">🇳🇬 +234</option>
                      <option value="+850">🇰🇵 +850</option>
                      <option value="+47">🇳🇴 +47</option>
                      <option value="+968">🇴🇲 +968</option>
                      <option value="+92">🇵🇰 +92</option>
                      <option value="+970">🇵🇸 +970</option>
                      <option value="+507">🇵🇦 +507</option>
                      <option value="+675">🇵🇬 +675</option>
                      <option value="+595">🇵🇾 +595</option>
                      <option value="+51">🇵🇪 +51</option>
                      <option value="+63">🇵🇭 +63</option>
                      <option value="+48">🇵🇱 +48</option>
                      <option value="+351">🇵🇹 +351</option>
                      <option value="+974">🇶🇦 +974</option>
                      <option value="+40">🇷🇴 +40</option>
                      <option value="+7">🇷🇺 +7</option>
                      <option value="+250">🇷🇼 +250</option>
                      <option value="+966">🇸🇦 +966</option>
                      <option value="+221">🇸🇳 +221</option>
                      <option value="+381">🇷🇸 +381</option>
                      <option value="+248">🇸🇨 +248</option>
                      <option value="+232">🇸🇱 +232</option>
                      <option value="+65">🇸🇬 +65</option>
                      <option value="+421">🇸🇰 +421</option>
                      <option value="+386">🇸🇮 +386</option>
                      <option value="+677">🇸🇧 +677</option>
                      <option value="+252">🇸🇴 +252</option>
                      <option value="+27">🇿🇦 +27</option>
                      <option value="+82">🇰🇷 +82</option>
                      <option value="+211">🇸🇸 +211</option>
                      <option value="+34">🇪🇸 +34</option>
                      <option value="+94">🇱🇰 +94</option>
                      <option value="+249">🇸🇩 +249</option>
                      <option value="+597">🇸🇷 +597</option>
                      <option value="+268">🇸🇿 +268</option>
                      <option value="+46">🇸🇪 +46</option>
                      <option value="+41">🇨🇭 +41</option>
                      <option value="+963">🇸🇾 +963</option>
                      <option value="+886">🇹🇼 +886</option>
                      <option value="+992">🇹🇯 +992</option>
                      <option value="+255">🇹🇿 +255</option>
                      <option value="+66">🇹🇭 +66</option>
                      <option value="+228">🇹🇬 +228</option>
                      <option value="+216">🇹🇳 +216</option>
                      <option value="+90">🇹🇷 +90</option>
                      <option value="+993">🇹🇲 +993</option>
                      <option value="+256">🇺🇬 +256</option>
                      <option value="+380">🇺🇦 +380</option>
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+598">🇺🇾 +598</option>
                      <option value="+998">🇺🇿 +998</option>
                      <option value="+678">🇻🇺 +678</option>
                      <option value="+58">🇻🇪 +58</option>
                      <option value="+84">🇻🇳 +84</option>
                      <option value="+967">🇾🇪 +967</option>
                      <option value="+260">🇿🇲 +260</option>
                      <option value="+263">🇿🇼 +263</option>
                    </select>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      placeholder="Mobile No." 
                      pattern="[0-9]{7,15}"
                      title="Please enter a valid phone number (7-15 digits)"
                      className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" 
                    />
                  </div>
                   <input type="email" name="email" required placeholder="Email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <textarea rows={4} name="message" required placeholder="Your Message" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"></textarea>
                <button 
                  disabled={status === "sending"}
                  className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-secondary transition shadow-lg disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Submit Now"}
                </button>
                
                {status === "success" && (
                  <div className="mt-4 text-green-600 font-bold text-center">
                    Thank you! Your message was sent.
                  </div>
                )}
                {status === "error" && (
                  <div className="mt-4 text-red-600 font-bold text-center">
                    Oops! Something went wrong. Please try again.
                  </div>
                )}
             </form>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ContactPage;
