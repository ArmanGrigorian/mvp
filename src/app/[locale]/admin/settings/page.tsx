export default function SettingsAdmin() {
  return (
    <div className="animate-fade-in space-y-8">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-foundation-navy text-3xl font-bold">
            General Settings
          </h1>
          <p className="font-medium text-gray-400">
            Configure global foundation parameters and website preferences.
          </p>
        </div>
      </div>

      <div className="max-w-2xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="foundation-name"
              className="text-foundation-navy text-sm font-bold tracking-wider uppercase"
            >
              Foundation Name
            </label>
            <input
              id="foundation-name"
              type="text"
              defaultValue="Humanitarian Bridge"
              className="text-foundation-navy focus:border-foundation-gold rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 transition-colors outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-email"
              className="text-foundation-navy text-sm font-bold tracking-wider uppercase"
            >
              Contact Email
            </label>
            <input
              id="contact-email"
              type="email"
              defaultValue="info@foundation.org"
              className="text-foundation-navy focus:border-foundation-gold rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 transition-colors outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="default-language"
              className="text-foundation-navy text-sm font-bold tracking-wider uppercase"
            >
              Default Language
            </label>
            <select
              id="default-language"
              className="text-foundation-navy focus:border-foundation-gold rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 transition-colors outline-none"
            >
              <option>English (US)</option>
              <option>Armenian (HY)</option>
              <option>Russian (RU)</option>
              <option>Portuguese (BR)</option>
              <option>French (FR)</option>
              <option>Spanish (ES)</option>
              <option>German (DE)</option>
            </select>
          </div>
          <button
            type="button"
            className="bg-foundation-navy hover:bg-foundation-navy/90 rounded-xl px-8 py-3 font-bold text-white transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
