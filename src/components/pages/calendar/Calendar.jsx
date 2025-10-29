// import FullCalendar from '@fullcalendar/react'
// import React from 'react';
// import dayGridPlugin from '@fullcalendar/daygrid';

// const Calendar = () => {
//   return (
//     <div>
//       <FullCalendar
//         plugins={[dayGridPlugin]}
//         initialView="dayGridMonth"
//       />
//     </div>
//   )
// }

// export default Calendar



import React, { useState, useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function Calendar() {
  const mode = localStorage.getItem("currentMode");
  const calendarRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [currentView, setCurrentView] = useState("dayGridMonth");
  const currentYear = new Date().getFullYear();

  // ✅ تحديث الـ CSS حسب المود القادم من المشروع
  useEffect(() => {
    const style = document.createElement("style");
    const isDark = mode === "dark";

    style.innerHTML = `
      body {
        background-color: ${isDark ? "#0f0f0f" : "#ffffff"};
        color: ${isDark ? "#f1f1f1" : "#111"};
        transition: background-color 0.3s, color 0.3s;
      }

      .calendar-container {
        width: auto;
        margin: 2rem auto;
        padding: 1rem;
        font-family: "Segoe UI", sans-serif;
        color: ${isDark ? "#f1f1f1" : "#111"};
      }

      .calendar-year {
        text-align: center;
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }

      .calendar-toolbar {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        flex-wrap: wrap;
        margin-bottom: 1rem;
      }

      .calendar-toolbar button {
        background: ${isDark ? "#333" : "#e5e7eb"};
        color: ${isDark ? "#f1f1f1" : "#111"};
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s;
        box-shadow: 0 1px 2px ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"};
        font-size: 0.95rem;
      }

      .calendar-toolbar button:hover {
        background: ${isDark ? "#444" : "#d1d5db"};
      }

      .calendar-toolbar button.active {
        background: #3b82f6;
        color: #fff;
      }

      .calendar-wrapper {
        background: ${isDark ? "#1a1a1a" : "#ffffff"};
        border-radius: 10px;
        box-shadow: 0 2px 6px ${isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.1)"};
        padding: 0.5rem;
        transition: all 0.3s;
      }

      /* 🔥 رأس أيام الأسبوع */
      .fc-col-header-cell {
        background: ${isDark ? "#2a2a2a" : "#ffffff"} !important;
        color: ${isDark ? "#ffffff" : "#000000"} !important;
        font-weight: 600;
        border: 1px solid ${isDark ? "#444" : "#ddd"};
      }

      .fc-scrollgrid {
        background: ${isDark ? "#1a1a1a" : "#ffffff"};
      }

      .fc-daygrid-day {
        background: ${isDark ? "#1a1a1a" : "#ffffff"};
        color: ${isDark ? "#f1f1f1" : "#111"};
      }

      .fc-theme-standard td, .fc-theme-standard th {
        border-color: ${isDark ? "#444" : "#ccc"};
      }

      .events-list {
        margin-top: 1.5rem;
        background: ${isDark ? "#1a1a1a" : "#ffffff"};
        border-radius: 8px;
        padding: 1rem;
        box-shadow: 0 2px 5px ${isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.1)"};
        color: ${isDark ? "#f1f1f1" : "#111"};
      }

      .events-list h3 {
        margin-bottom: 0.5rem;
        font-size: 1.1rem;
      }
    `;

    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, [mode]);

  // Calendar logic
  const handleDateSelect = (selectInfo) => {
    let title = prompt("Event title:");
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();

    if (title) {
      const newEvent = {
        id: String(Date.now()),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      };
      setEvents((prev) => [...prev, newEvent]);
    }
  };

  const handleEventClick = (clickInfo) => {
    const ev = clickInfo.event;
    const action = window.prompt(
      'Type "delete" to remove or enter a new title to rename:',
      ""
    );
    if (action === null) return;
    if (action.toLowerCase() === "delete") {
      if (window.confirm("Are you sure you want to delete this event?")) {
        ev.remove();
        setEvents((prev) => prev.filter((e) => e.id !== ev.id));
      }
    } else if (action.trim() !== "") {
      ev.setProp("title", action);
      setEvents((prev) =>
        prev.map((e) => (e.id === ev.id ? { ...e, title: action } : e))
      );
    }
  };

  const handleEventChange = (changeInfo) => {
    const ev = changeInfo.event;
    setEvents((prev) =>
      prev.map((e) =>
        e.id === ev.id
          ? { ...e, start: ev.startStr, end: ev.endStr || null, allDay: ev.allDay }
          : e
      )
    );
  };

  const goToPrev = () => calendarRef.current.getApi().prev();
  const goToNext = () => calendarRef.current.getApi().next();
  const goToToday = () => calendarRef.current.getApi().today();
  const changeView = (view) => {
    const cal = calendarRef.current.getApi();
    cal.changeView(view);
    setCurrentView(view);
  };

  return (
    <div className="calendar-container">
      <h2 className="calendar-year">📅 {currentYear}</h2>

      <div className="calendar-toolbar">
        <button onClick={goToPrev}>Prev</button>
        <button onClick={goToToday}>Today</button>
        <button onClick={goToNext}>Next</button>
        <div className="divider" />
        <button
          onClick={() => changeView("dayGridMonth")}
          className={currentView === "dayGridMonth" ? "active" : ""}
        >
          Month
        </button>
        <button
          onClick={() => changeView("timeGridWeek")}
          className={currentView === "timeGridWeek" ? "active" : ""}
        >
          Week
        </button>
        <button
          onClick={() => changeView("timeGridDay")}
          className={currentView === "timeGridDay" ? "active" : ""}
        >
          Day
        </button>
      </div>

      <div className="calendar-wrapper">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={currentView}
          headerToolbar={false}
          editable
          selectable
          selectMirror
          dayMaxEvents
          weekends
          events={events}
          select={handleDateSelect}
          eventClick={handleEventClick}
          eventChange={handleEventChange}
          height="auto"
        />
      </div>

      <div className="events-list">
        <h3>📋 Current Events</h3>
        <ul>
          {events.length === 0 && <li>No events yet</li>}
          {events.map((e) => (
            <li key={e.id}>
              <strong>{e.title}</strong> • {e.start}
              {e.end ? ` — ${e.end}` : ""}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
