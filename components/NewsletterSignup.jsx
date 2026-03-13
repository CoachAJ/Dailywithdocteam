'use client';

export default function NewsletterSignup() {
  return (
    <div className="bg-forest-950 border-t border-forest-800 py-10">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="section-divider mx-auto mb-4" />
        <h3 className="font-playfair text-2xl font-bold text-white mb-2">
          Stay in the Know
        </h3>
        <p className="text-forest-300 text-sm mb-6">
          Get the latest research, protocols, and updates from the Daily With Doc Team — straight to your inbox.
        </p>
        <div className="bg-forest-900/60 border border-forest-700 rounded-2xl p-6">
          {/* eslint-disable-next-line react/no-unknown-property */}
          <getresponse-form form-id="6f0b9980-fe7a-40af-9aee-c319519e9971" e="1"></getresponse-form>
        </div>
      </div>
    </div>
  );
}
