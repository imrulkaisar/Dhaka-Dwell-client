# Dhaka Dwell - Client Side

## Live link: [Dhaka Dwell](https://dhakadwell.surge.sh/)

## Overview

Dhaka Dwell Client is the frontend component of the Dhaka Dwell project, providing a user-friendly interface for managing rental transactions and agreements for apartments in Dhaka.

## Key Features

- **User Dashboard**: Personalized dashboard for each user, displaying relevant information and actions.
- **Payment Integration**: Seamlessly pay rent through secure Stripe integration.
- **Agreement Details**: Access and manage rental agreement details with ease.
- **Notification Center**: Receive real-time notifications for payment updates and agreement changes.
- **Expense Tracking**: Monitor and track additional expenses associated with your rental property.
- **Maintenance Requests**: Submit and track maintenance requests for quick issue resolution.
- **Messaging System**: Communicate with landlords and fellow tenants through an integrated messaging system.
- **Profile Customization**: Personalize your profile with a profile picture and contact information.

## Getting Started

### Prerequisites

- **Node.js**: Ensure Node.js is installed.
- **API Server**: Make sure the Dhaka Dwell Server is running.

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/dhaka-dwell-frontend.git
   cd dhaka-dwell-frontend
   ```
2. **Install Dependencies:**


    bashCopy code

    `npm install`

3.  **Configure Environment Variables:**

    - Create a `.env` file in the project root.
    - Set the API endpoint for the Dhaka Dwell Server (e.g., `REACT_APP_API_URL=http://localhost:your-server-port`).

4.  **Start the Development Server:**

    bashCopy code

    `npm run dev`

## Project Structure

- **src/components**: Reusable UI components.
- **src/pages**: Main application pages.
- **src/utils**: Utility functions and helper modules.
- **src/hooks**: Custom React hooks.
- **src/routers**: project routers.

## Technologies Used

- **React**: Building the user interface.
- **Stripe Elements**: Integrating secure payment elements.
- **React Query**: Efficiently manage and fetch data.

## Contributing

We welcome contributions! Follow our [Contribution Guidelines]() to get started.

## License

This project is licensed under the [MIT License]().

## Acknowledgments

- **React Community**: Thanks to the amazing React community for building such a versatile library.
- **Stripe**: Special thanks to [Stripe](https://stripe.com/) for their reliable payment processing services.

Happy coding!
