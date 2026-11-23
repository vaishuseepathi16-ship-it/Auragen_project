
"use client";

import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [loadScore, setLoadScore] = useState(32);
  const [adaptiveMode, setAdaptiveMode] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [savings, setSavings] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const tabs = ["Overview", "Telemetry", "Adaptive UI"];

  function simulateActivity() {
    setLoadScore(Math.floor(Math.random() * 60) + 35);
  }

  function activateAdaptiveUI() {
    const next = !adaptiveMode;
    setAdaptiveMode(next);
    setShowForm(next);
    setSubmitted(false);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!income || !expenses || !savings) return;

    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#f7f8fc] text-[#172033]">

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-[#e9ebf2] bg-white p-6 lg:block">
        <div className="mb-12 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6956d9] text-xl font-bold text-white">
            A
          </div>
          <div>
            <h1 className="text-xl font-bold">AuraGen</h1>
            <p className="text-xs text-gray-400">Adaptive Intelligence</p>
          </div>
        </div>

        <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Workspace
        </p>

        <div className="space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                activeTab === tab
                  ? "bg-[#f0edff] text-[#6956d9]"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              {tab === "Overview" && "◫"}
              {tab === "Telemetry" && "◉"}
              {tab === "Adaptive UI" && "✧"}
              <span className="ml-3">{tab}</span>
            </button>
          ))}
        </div>

        <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-[#f7f5ff] p-4">
          <p className="text-sm font-semibold text-[#6956d9]">
            ✨ AI Powered
          </p>
          <p className="mt-2 text-xs leading-5 text-gray-500">
            Interfaces that understand and adapt to users.
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <section className="lg:ml-64">

        {/* Header */}
        <header className="flex items-center justify-between border-b border-[#e9ebf2] bg-white px-5 py-5 sm:px-8">
          <div>
            <h2 className="text-lg font-bold">AuraGen Workspace</h2>
            <p className="text-xs text-gray-400">
              Self-Healing Generative UI
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded-full bg-green-50 px-3 py-2 text-xs font-medium text-green-600">
              ● System Online
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eeeaff] font-bold text-[#6956d9]">
              AG
            </div>
          </div>
        </header>

        <div className="p-5 sm:p-8">

          {/* Overview */}
          {activeTab === "Overview" && (
            <>
              <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <p className="mb-2 text-sm font-medium text-[#6956d9]">
                    YOUR INTELLIGENT INTERFACE
                  </p>
                  <h1 className="text-3xl font-bold sm:text-4xl">
                    Welcome to AuraGen
                  </h1>
                  <p className="mt-2 text-sm text-gray-500">
                    Monitor user experience and watch your interface adapt.
                  </p>
                </div>

                <button
                  onClick={simulateActivity}
                  className="rounded-xl bg-[#6956d9] px-5 py-3 text-sm font-semibold text-white hover:bg-[#5743c5]"
                >
                  Run Demo Analysis ↗
                </button>
              </div>

              <div className="mb-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-2xl border border-[#e9ebf2] bg-white p-5 shadow-sm">
                  <p className="text-sm text-gray-500">Cognitive Load</p>
                  <h2 className="mt-4 text-3xl font-bold">{loadScore}%</h2>
                  <div className="mt-4 h-2 rounded-full bg-gray-100">
                    <div
                      className="h-2 rounded-full bg-[#806be9] transition-all"
                      style={{ width: `${loadScore}%` }}
                    />
                  </div>
                </div>

                <div className="rounded-2xl border border-[#e9ebf2] bg-white p-5 shadow-sm">
                  <p className="text-sm text-gray-500">Telemetry Status</p>
                  <h2 className="mt-4 text-2xl font-bold text-green-600">
                    Ready
                  </h2>
                  <p className="mt-3 text-xs text-gray-400">
                    Demo interface initialized
                  </p>
                </div>

                <div className="rounded-2xl border border-[#e9ebf2] bg-white p-5 shadow-sm">
                  <p className="text-sm text-gray-500">Adaptive Mode</p>
                  <h2 className="mt-4 text-2xl font-bold">
                    {adaptiveMode ? "Active" : "Inactive"}
                  </h2>
                  <p className="mt-3 text-xs text-gray-400">
                    {adaptiveMode ? "Simplified form enabled" : "Standard interface"}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#e9ebf2] bg-white p-5 shadow-sm">
                  <p className="text-sm text-gray-500">AI Engine</p>
                  <h2 className="mt-4 text-2xl font-bold">Aura AI</h2>
                  <p className="mt-3 text-xs text-gray-400">
                    Backend integration pending
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#e9ebf2] bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold">Cognitive Analytics</h2>
                <p className="mt-1 text-sm text-gray-400">
                  User experience monitoring
                </p>

                <div className="my-8 rounded-2xl bg-[#f8f7ff] p-6">
                  <p className="text-sm text-gray-500">
                    Current Cognitive Load Score
                  </p>
                  <h1 className="mt-3 text-5xl font-bold text-[#6956d9]">
                    {loadScore}
                  </h1>
                  <p className="mt-2 text-sm font-semibold">
                    {loadScore >= 70 ? "High Load" : loadScore >= 40 ? "Moderate Load" : "Low Load"}
                  </p>
                  <p className="text-xs text-gray-400">Out of 100</p>
                </div>

                <button
                  onClick={() => setActiveTab("Telemetry")}
                  className="rounded-xl border border-[#6956d9] px-5 py-3 text-sm font-semibold text-[#6956d9]"
                >
                  View Telemetry →
                </button>
              </div>
            </>
          )}

          {/* Telemetry */}
          {activeTab === "Telemetry" && (
            <div>
              <p className="mb-2 text-sm font-medium text-[#6956d9]">
                USER EXPERIENCE
              </p>
              <h1 className="text-3xl font-bold">Telemetry Dashboard</h1>
              <p className="mt-2 text-sm text-gray-500">
                Monitor user interaction and cognitive load.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#e9ebf2] bg-white p-6 shadow-sm">
                  <p className="text-sm text-gray-500">Cognitive Load</p>
                  <h2 className="mt-4 text-4xl font-bold text-[#6956d9]">
                    {loadScore}%
                  </h2>
                  <div className="mt-5 h-2 rounded-full bg-gray-100">
                    <div
                      className="h-2 rounded-full bg-[#806be9]"
                      style={{ width: `${loadScore}%` }}
                    />
                  </div>
                </div>

                <div className="rounded-2xl border border-[#e9ebf2] bg-white p-6 shadow-sm">
                  <p className="text-sm text-gray-500">Monitoring Status</p>
                  <h2 className="mt-4 text-2xl font-bold text-green-600">
                    Active Demo
                  </h2>
                  <p className="mt-3 text-xs text-gray-400">
                    Interface monitoring initialized
                  </p>
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-[#e9ebf2] bg-white p-6 shadow-sm">
                <h2 className="mb-6 text-lg font-bold">
                  Interaction Monitoring
                </h2>

                {[
                  ["Mouse Activity", "Monitoring interface events"],
                  ["User Hesitation", "Demo indicator"],
                  ["Interaction Patterns", "Demo indicator"],
                  ["Cognitive Load", "Current demo score"],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="flex items-center justify-between border-b border-gray-100 py-5 last:border-0"
                  >
                    <div>
                      <p className="text-sm font-semibold">{title}</p>
                      <p className="mt-1 text-xs text-gray-400">{description}</p>
                    </div>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-600">
                      Demo
                    </span>
                  </div>
                ))}

                <button
                  onClick={simulateActivity}
                  className="mt-5 rounded-xl bg-[#6956d9] px-5 py-3 text-sm font-semibold text-white"
                >
                  Refresh Analysis ↗
                </button>
              </div>
            </div>
          )}

          {/* Adaptive UI */}
          {activeTab === "Adaptive UI" && (
            <div>
              <p className="mb-2 text-sm font-medium text-[#6956d9]">
                INTELLIGENT INTERFACE
              </p>
              <h1 className="text-3xl font-bold">Adaptive UI</h1>
              <p className="mt-2 text-sm text-gray-500">
                Experience an interface that simplifies itself.
              </p>

              <div className="mt-7 rounded-2xl border border-[#e9ebf2] bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold">Aura AI Assistant</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Your interface can adapt to user behaviour and reduce
                  cognitive complexity.
                </p>

                <div className="my-6 rounded-xl border border-purple-100 bg-purple-50 p-4">
                  <p className="text-xs font-semibold text-[#6956d9]">
                    SUGGESTED ACTION
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    Try the adaptive form to see how AuraGen can simplify
                    a complex interface.
                  </p>
                </div>

                <button
                  onClick={activateAdaptiveUI}
                  className="w-full rounded-xl bg-[#6956d9] py-3 text-sm font-semibold text-white hover:bg-[#5743c5]"
                >
                  {adaptiveMode ? "Disable Adaptive UI" : "Activate Adaptive UI"}
                </button>
              </div>

              <div className="mt-7 rounded-2xl border border-[#e9ebf2] bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold">
                  Adaptive Interface Preview
                </h2>
                <p className="mt-1 text-sm text-gray-400">
                  Enter your financial information.
                </p>

                {showForm ? (
                  <div className="mt-6 max-w-xl">
                    {submitted ? (
                      <div className="rounded-xl bg-green-50 p-6">
                        <h3 className="text-xl font-bold text-green-700">
                          Form Submitted Successfully!
                        </h3>
                        <p className="mt-2 text-sm text-green-600">
                          Your information has been captured in this demo.
                        </p>
                        <button
                          onClick={() => {
                            setSubmitted(false);
                            setIncome("");
                            setExpenses("");
                            setSavings("");
                          }}
                          className="mt-4 rounded-xl bg-[#6956d9] px-5 py-3 text-sm font-semibold text-white"
                        >
                          Submit Another Response
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                          <label className="mb-2 block text-sm font-medium">
                            Monthly Income (₹)
                          </label>
                          <input
                            type="number"
                            min="1"
                            required
                            value={income}
                            onChange={(e) => setIncome(e.target.value)}
                            placeholder="Enter monthly income"
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-purple-400"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-medium">
                            Monthly Expenses (₹)
                          </label>
                          <input
                            type="number"
                            min="0"
                            required
                            value={expenses}
                            onChange={(e) => setExpenses(e.target.value)}
                            placeholder="Enter monthly expenses"
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-purple-400"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-medium">
                            Monthly Savings (₹)
                          </label>
                          <input
                            type="number"
                            min="0"
                            required
                            value={savings}
                            onChange={(e) => setSavings(e.target.value)}
                            placeholder="Enter monthly savings"
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-purple-400"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full rounded-xl bg-[#6956d9] py-3 text-sm font-semibold text-white hover:bg-[#5743c5]"
                        >
                          Submit Information →
                        </button>
                      </form>
                    )}
                  </div>
                ) : (
                  <div className="mt-6">
                    <p className="mb-4 text-sm text-gray-500">
                      Activate Adaptive UI to display the simplified form.
                    </p>
                    <button
                      onClick={() => setShowForm(true)}
                      className="rounded-xl border border-[#6956d9] px-5 py-3 text-sm font-semibold text-[#6956d9]"
                    >
                      Preview Simplified Form →
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          <footer className="mt-8 border-t border-[#e9ebf2] pt-5 text-center text-xs text-gray-400">
            © 2026 AuraGen | Self-Healing Generative UI
          </footer>
        </div>
      </section>
    </main>
  );
}
