import React, { useState } from "react";

// Switch Component
const Switch = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <span className="mr-2">{label}</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={onChange}
        />
        <div className="w-10 h-6 bg-gray-200 rounded-full"></div>
        <div
          className={`absolute left-0 top-0 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
            checked ? "translate-x-4" : "translate-x-0"
          }`}
        ></div>
      </label>
    </div>
  );
};

export const Notification = () => {
  // State to manage on/off toggles
  const [dueDateReminder, setDueDateReminder] = useState({
    push: true,
    email: true,
  });
  const [overdueReminder, setOverdueReminder] = useState({
    push: true,
    email: true,
  });
  const [requestReminder, setRequestReminder] = useState({
    push: true,
    email: true,
  });
  const [systemAlerts, setSystemAlerts] = useState(true);

  // Toggle handlers
  const toggleHandler = (setter, key) => () => {
    setter((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="font-bold">
      {/* Due Date Reminders */}
      <div className="flex justify-between w-1/2 items-center mt-20">
        <div>Due date reminders</div>
        <div className="flex  gap-10 items-center">
          <div className="space-y-6 flex-col">
            <div className="flex gap-4  items-top">
              <Switch
                checked={dueDateReminder.push}
                onChange={toggleHandler(setDueDateReminder, "push")}
              />
              <p className="text-[20px]">Push</p>
            </div>
            <div className="flex gap-4  items-top">
              <Switch
                checked={dueDateReminder.email}
                onChange={toggleHandler(setDueDateReminder, "email")}
              />
              <p className="text-[20px]">Email</p>
            </div>
            {/* <Switch
            label="Email"
            checked={dueDateReminder.email}
            onChange={toggleHandler(setDueDateReminder, 'email')}
          /> */}
          </div>
          <div>
            <select className="bg-white pr-4 pl-2 w-36 rounded p-4">
              <option>3 Day Before</option>
            </select>
          </div>
        </div>
      </div>

      {/* Overdue Reminders */}
      <div className="flex justify-between w-1/2 items-center mt-20">
        <div>Overdue reminders</div>
        <div className="flex gap-10 items-center">
          <div className="space-y-6 flex-col">
            <div className="flex gap-4  items-top">
              <Switch
                checked={overdueReminder.push}
                onChange={toggleHandler(setOverdueReminder, "push")}
              />
              <p className="text-[20px]">Push</p>
            </div>
            <div className="flex gap-4  items-top">
              <Switch
                checked={overdueReminder.email}
                onChange={toggleHandler(setOverdueReminder, "email")}
              />
              <p className="text-[20px]">Email</p>
            </div>
          </div>
          {/* <Switch
            label="Push"
            checked={overdueReminder.push}
            onChange={toggleHandler(setOverdueReminder, 'push')}
          />
          <Switch
            label="Email"
            checked={overdueReminder.email}
            onChange={toggleHandler(setOverdueReminder, 'email')}
          /> */}
          <div>
            <select className="bg-white rounded pr-4 pl-2 w-36 p-4">
              <option>Daily</option>
            </select>
          </div>
        </div>
      </div>

      {/* Requests */}
      <div className="flex justify-between w-1/2 items-center mt-20">
        <div>Requests</div>
        <div className="flex gap-10 items-center">
          {/* <Switch
            label="Push"
            checked={requestReminder.push}
            onChange={toggleHandler(setRequestReminder, 'push')}
          />
          <Switch
            label="Email"
            checked={requestReminder.email}
            onChange={toggleHandler(setRequestReminder, 'email')}
          /> */}
          <div className="space-y-6 flex-col">
            <div className="flex gap-4  items-top">
              <Switch
                checked={requestReminder.push}
                onChange={toggleHandler(setRequestReminder, "push")}
              />
              <p className="text-[20px]">Push</p>
            </div>
            <div className="flex gap-4  items-top">
              <Switch
                checked={requestReminder.email}
                onChange={toggleHandler(setRequestReminder, "email")}
              />
              <p className="text-[20px]">Email</p>
            </div>
          </div>
          <div>
            <select className="bg-white pr-4 pl-2 w-36 rounded p-4">
              <option>Daily</option>
            </select>
          </div>
        </div>
      </div>

      {/* System Alerts */}
      <div className="mt-20 flex justify-between w-1/3">
        <div>System alerts</div>
        <div>
          <Switch
            label=""
            checked={systemAlerts}
            onChange={() => setSystemAlerts((prev) => !prev)}
          />
        </div>
      </div>
    </div>
  );
};
