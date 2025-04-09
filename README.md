# Funeral Services App

React application for managing funeral service organizations, built with:

## Features (Test Task Requirements)

- **View Company Details**:

  - Displays company information.
  - Displays contact information.
  - Shows a list of photos associated with the company.

- **Edit Company Details**:

  - Users can edit company details.
  - Users can edit contact details.
  - Changes are saved to the server using API.

- **Delete Company**:

  - Users can delete the company.
  - A confirmation modal is shown before deletion.

- **Manage Photos**:

  - Users can upload new photos.
  - Users can delete photos.
  - Photos are displayed in a gallery format.

- **API Integration**:
  - Fetches company and contact data using `GET /companies/12` and `GET /contacts/16`.
  - Authenticates using `GET /auth?user=USERNAME` to obtain a token.

## Extra Features (Beyond Test Task Requirements)

- **Data Formatting**:

  - Formats phone numbers (e.g., `17025552345` → `+1 702 555 2345`).
  - Formats company types (e.g., `funeral_home` → `Funeral Home`).

- **Custom Select Component**:

  - Custom Styling to comply with the provided design specifications that couldn't be achieved with native select styling.
  - Multi-Select Functionality (Supports selecting multiple options with checkboxes).
  - Enhanced UX (Close on outside click and Escape, visual feedback).

- **Input Validation**:

  - Validates name (company name and contact name).
  - Validates contact details (name, phone, email).
  - Validates photo uploads (image type, max size 2MB).

- **User Feedback**:

  - Uses `react-toastify` to show success and error notifications for API operations and validation errors.

- **Modal Dialogs**:

  - Added modals for editing the organization name and confirming deletion, with proper UX (close on outside click or Escape key).

- **Fullsize Photo Preview**:

  - User can click on photo thumbnain and open it fullsize in modal window.

- **Code Quality**:
  - Pixel-Perfect implementation of provided designs.
  - Full compliance with test requirements.
  - Optimized API calls with error handling.
  - Separated concerns by creating reusable components (`Modal`, `Button`, `CustomSelect`).
  - Used MobX for state management with proper reactivity.
  - Added ESLint and fixed related issues for better code consistency.

## Tech Stack

- **React**: For building the UI.
- **MobX**: For state management.
- **react-toastify**: For notifications.
- **react-datepicker**: For date selection.
- **SCSS**: For styling.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/ApeIsHere/allf_test_assignment
   cd allf_test_assignment
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

4. Open the app in your browser (default: http://localhost:5173).
