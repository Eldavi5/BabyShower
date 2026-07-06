import type { Locale } from "@/data/invitation";
import { invitationContent } from "@/data/invitation";
import { CalendarDays, MapPin, MapPinned, PartyPopper } from "lucide-react";
import { FlightFootprints } from "@/features/invitation/components/airplane-illustrations";

interface EventSectionProps {
  locale: Locale;
}

export function EventSection({ locale }: EventSectionProps) {
  const content = invitationContent[locale];
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(content.event.mapsQuery)}`;

  return (
    <section className="space-y-6">
      {/* Flight trail divider at the top */}
      <FlightFootprints size={40} className="mb-2 opacity-85 animate-[pulse_3s_ease-in-out_infinite]" />

      <div className="max-w-3xl text-center md:text-left">
        <p className="text-xs font-bold uppercase tracking-[0.38em] text-sky-700">
          {content.eventTitle}
        </p>
        <h2 className="mt-1 font-display text-3xl font-black text-slate-800 md:text-4xl">
          {content.eventSubtitle}
        </h2>
        <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-slate-600 font-medium">
          {content.eventNote}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Quick Details Cards */}
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {/* Date Card */}
          <div className="glass-card glass-card-hover p-6 rounded-[2rem] flex flex-col justify-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100/80 text-sky-700">
              <CalendarDays className="h-5.5 w-5.5" />
            </div>
            <p className="mt-4 text-[0.68rem] font-bold uppercase tracking-[0.32em] text-sky-700">
              {content.eventLabels.date}
            </p>
            <p className="mt-1.5 text-base font-black text-slate-800 leading-tight">
              {content.event.date}
            </p>
          </div>

          {/* Time Card */}
          <div className="glass-card glass-card-hover p-6 rounded-[2rem] flex flex-col justify-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100/80 text-sky-700">
              <PartyPopper className="h-5.5 w-5.5" />
            </div>
            <p className="mt-4 text-[0.68rem] font-bold uppercase tracking-[0.32em] text-sky-700">
              {content.eventLabels.time}
            </p>
            <p className="mt-1.5 text-base font-black text-slate-800 leading-tight">
              {content.event.time}
            </p>
          </div>

          {/* Location Card */}
          <div className="glass-card glass-card-hover p-6 rounded-[2rem] flex flex-col justify-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100/80 text-sky-700">
              <MapPin className="h-5.5 w-5.5" />
            </div>
            <p className="mt-4 text-[0.68rem] font-bold uppercase tracking-[0.32em] text-sky-700">
              {content.eventLabels.location}
            </p>
            <p className="mt-1.5 text-base font-black text-slate-800 leading-tight">
              {content.event.location}
            </p>
          </div>
        </div>

        {/* Location Map Preview Panel */}
        <div className="glass-card rounded-[2.2rem] p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(2,132,199,0.06)]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                <MapPinned className="h-4.5 w-4.5" />
              </span>
              <h3 className="font-display text-lg font-black text-slate-800">
                {content.locationImageTitle}
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-slate-600 font-medium">
              {content.locationImageCaption}
            </p>

            {/* Real Google Maps embed iframe with absolute custom airplane pin */}
            <div className="relative overflow-hidden rounded-[1.6rem] border border-sky-100/50 aspect-[1.8/1] flex items-center justify-center bg-sky-50 shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d742.9382988450034!2d-88.32356683028934!3d41.85513879710349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880efcccde91cb91%3A0x2139a0e6a1563fd!2s1003%20Lorlyn%20Cir%2C%20Batavia%2C%20IL%2060510%2C%20EE.%20UU.!5e0!3m2!1ses-419!2smx!4v1783378215691!5m2!1ses-419!2smx"
                className="absolute border-0 opacity-95"
                style={{
                  top: "-52px",
                  left: "-90px",
                  width: "calc(100% + 180px)",
                  height: "calc(100% + 104px)"
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Google Maps Location"
              />
              {/* Overlay cover to prevent capture of mouse wheel scroll on the landing page */}
              <div className="absolute inset-0 z-0 bg-transparent" />
              
              {/* Radar Landing Pad cover that completely covers the default Google red pin marker */}
              <div className="absolute top-[49%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border-2 border-sky-600 shadow-md flex items-center justify-center z-10">
                {/* Inner target circle */}
                <div className="w-4.5 h-4.5 bg-sky-600 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                {/* Pulse ring */}
                <div className="absolute w-full h-full rounded-full border-2 border-sky-400 animate-ping opacity-35" />
              </div>

              {/* Custom bouncing Airplane pin floating above the landing target center */}
              <div className="absolute top-[41%] left-[50%] -translate-x-[50%] -translate-y-1/2 z-15 pointer-events-none">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-700 text-white shadow-[0_8px_20px_rgba(3,105,161,0.35)] border-2 border-white text-base animate-bounce">
                  ✈️
                </span>
              </div>
            </div>
          </div>

          <a
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
            className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-sky-700 px-6 py-4 font-bold text-white shadow-lg shadow-sky-700/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-800 hover:shadow-xl hover:shadow-sky-700/25 cursor-pointer text-center text-sm tracking-wide"
          >
            <MapPinned className="h-4.5 w-4.5" />
            {content.mapsButton}
          </a>
        </div>
      </div>
    </section>
  );
}
export default EventSection;
