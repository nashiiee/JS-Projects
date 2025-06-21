# New Year's Countdown Timer

This project is a simple JavaScript countdown timer that displays the time remaining until the next New Year's Day. It dynamically calculates the target year based on the current date, so it always counts down to the upcoming January 1st.

---

## How It Works

### 1. Get Today's Date

```javascript
const now = new Date();
```
- Creates a `Date` object representing the current date and time.

---

### 2. Determine the Next New Year's Day

```javascript
let targetYear = now.getFullYear();
if (
  now.getMonth() > 0 || // After January
  (now.getMonth() === 0 && now.getDate() > 1) // Or after Jan 1
) {
  targetYear += 1;
}
const newYears = `1 Jan ${targetYear}`;
```
- `now.getFullYear()` gets the current year (e.g., 2025).
- `now.getMonth()` returns the month (0 = January, 11 = December).
- If today is after January 1, the countdown targets January 1 of the **next** year.
- Otherwise, it targets January 1 of the **current** year.

---

### 3. Countdown Calculation

```javascript
function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const totalSeconds = Math.floor((newYearsDate - currentDate) / 1000);

  if (totalSeconds < 0) {
    document.getElementById('countdown').textContent = "🎉 Happy New Year! 🎉";
    return;
  }

  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = totalSeconds % 60;

  document.getElementById('countdown').textContent =
    `Time until New Year: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}
```
- Calculates the difference between the target date and the current date in **seconds**.
- Converts total seconds into **days, hours, minutes, and seconds**.
- Updates the countdown display in the HTML.
- If the countdown is over, displays a "Happy New Year!" message.

---

### 4. Updating the Countdown

```javascript
countdown(); // Initial call to display immediately
setInterval(countdown, 1000); // Update every second
```
- Calls the `countdown` function every second to keep the display up to date.

---

## Key JavaScript Methods Used

- **`Date()`**: Creates date objects.
- **`getFullYear()`**: Gets the four-digit year.
- **`getMonth()`**: Gets the month (0–11).
- **`getDate()`**: Gets the day of the month.
- **`setInterval()`**: Runs a function repeatedly at specified intervals.

---

## Example Output

```
Time until New Year: 192d 3h 12m 45s
```

---