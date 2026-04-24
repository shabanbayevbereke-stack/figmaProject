export const HomeStyles = (isDark: boolean) => ({
  container: "space-y-6 max-w-[1400px] mx-auto",
  
  header: {
    wrapper: "flex justify-between items-center px-1",
    title: "text-2xl font-bold tracking-tight",
    select: `px-4 py-2 rounded-xl border text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 transition-colors ${
      isDark ? "bg-slate-800 border-slate-700 text-white" : "bg-white border-slate-200 text-slate-900"
    }`,
  },

  card: {
    base: `p-6 rounded-2xl border transition-all duration-200 ${
      isDark ? "bg-[#1f2937] border-slate-800 text-white" : "bg-white border-slate-200 shadow-sm text-slate-900"
    }`,
    progressWrapper: `h-4 w-full rounded-full overflow-hidden p-1 ${isDark ? "bg-slate-900" : "bg-slate-100"}`,
    progressBar: "h-full rounded-full bg-linear-to-r from-indigo-600 to-blue-400 transition-all duration-700",
    statusTitle: "text-xs font-bold text-slate-400 uppercase tracking-widest mb-1",
    statusValue: "text-2xl font-black text-indigo-500 italic",
    footerText: "mt-3 text-xs text-slate-500 font-medium tracking-wide",
  },

  tableSection: {
    wrapper: "overflow-hidden p-0",
    header: "p-6 border-b border-inherit flex justify-between items-center",
    title: "text-lg font-bold",
    badge: "text-xs bg-indigo-500/10 text-indigo-500 px-2 py-1 rounded-md font-bold",
    scrollArea: "p-4 overflow-x-auto",
  },

  grid: "grid grid-cols-1 md:grid-cols-3 gap-6",
});