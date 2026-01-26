import React, { useEffect } from 'react';
import { FileText, Video, Download, ArrowLeft, Play } from 'lucide-react';
import Button from './Button';
import { Link } from 'react-router-dom';

const Resources: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const resources = [
        {
            category: "Guides",
            title: "Digital Marketing Basics",
            type: "PDF",
            size: "2.4 MB",
            icon: <FileText className="h-6 w-6 text-blue-600" />,
            url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        },
        {
            category: "Guides",
            title: "Entrepreneurship 101 Toolkit",
            type: "PDF",
            size: "4.1 MB",
            icon: <FileText className="h-6 w-6 text-blue-600" />,
            url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        },
        {
            category: "Templates",
            title: "Business Model Canvas Template",
            type: "DOCX",
            size: "1.2 MB",
            icon: <Download className="h-6 w-6 text-green-600" />,
            url: "https://filesamples.com/samples/document/docx/sample3.docx"
        }
    ];

    const videos = [
        {
            title: "Introduction to Coding",
            duration: "45 min",
            image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Public Speaking Masterclass",
            duration: "30 min",
            image: "https://images.unsplash.com/photo-1475721027767-pfa536027d49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    const handleDownload = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Header */}
            <div className="bg-brand-royal text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-4xl font-bold font-heading mb-4">Resources & Media</h1>
                    <p className="text-xl text-blue-100 max-w-2xl">
                        Explore our curated library of learning materials, workshop recordings, and tools to support your growth.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                
                {/* Video Section */}
                <section className="mb-20">
                    <div className="flex items-center mb-8">
                        <Video className="h-6 w-6 text-brand-royal mr-3" />
                        <h2 className="text-2xl font-bold text-slate-900">Featured Workshops</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {videos.map((video, idx) => (
                            <div key={idx} className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer">
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors z-10"></div>
                                <img src={video.image} alt={video.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 z-20 flex items-center justify-center">
                                    <div className="h-16 w-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-brand-royal/80 transition-colors">
                                        <Play className="h-8 w-8 text-white ml-1" />
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="text-white font-bold text-xl mb-1">{video.title}</h3>
                                    <p className="text-slate-300 text-sm">{video.duration}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Downloads Section */}
                <section>
                    <div className="flex items-center mb-8">
                        <Download className="h-6 w-6 text-brand-royal mr-3" />
                        <h2 className="text-2xl font-bold text-slate-900">Downloadable Materials</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {resources.map((res, idx) => (
                            <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-white rounded-lg shadow-sm">
                                        {res.icon}
                                    </div>
                                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 bg-slate-200 px-2 py-1 rounded">
                                        {res.type}
                                    </span>
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">{res.title}</h3>
                                <p className="text-sm text-slate-500 mb-4">{res.category} • {res.size}</p>
                                <Button 
                                    variant="outline" 
                                    size="sm" 
                                    className="w-full justify-center" 
                                    onClick={() => handleDownload(res.url)}
                                >
                                    Download
                                </Button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Newsletter CTA */}
                <div className="mt-20 bg-slate-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
                     <div className="absolute top-0 right-0 -mt-20 -mr-20 h-80 w-80 bg-brand-royal rounded-full opacity-20 blur-3xl"></div>
                     <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Want more resources?</h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-8">
                            Subscribe to our newsletter to get the latest guides, course updates, and tech tips delivered directly to your inbox.
                        </p>
                        <Button variant="cyan" onClick={() => document.getElementById('footer-newsletter')?.scrollIntoView({behavior: 'smooth'})}>
                            Subscribe Now
                        </Button>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;