# Gym Website using RapidAPI

This is a Gym Website project created using the RapidAPI platform and powered by Material UI. The website allows users to explore a variety of exercises, search for exercise-related YouTube videos, and select their desired exercises. This README provides an overview of the project, its features, and how to set it up.

## Features

- **Exercise Database**: The website leverages the Exercise Database API from RapidAPI to provide a comprehensive list of exercises. Users can explore exercises categorized by body parts, equipment, and more.

- **YouTube Integration**: Users can view related YouTube videos for each exercise. The YouTube Search API from RapidAPI is used to fetch and display relevant video content.

- **Exercise Selection**: Users can select exercises they are interested in, and the website will provide information about those exercises, along with related videos.

## Technologies Used

- **React**: The project is built using the React JavaScript library for creating user interfaces.

- **Material UI**: Material UI is used for styling the website, providing a modern and visually appealing user interface.

- **RapidAPI**: The website interacts with RapidAPI to access the Exercise Database and YouTube Search APIs.

## Getting Started

Follow these steps to set up and run the Gym Website project on your local machine:

1. **Clone the Repository**: Clone this GitHub repository to your local machine using the following command:

   ```bash
   git clone https://github.com/your-username/gym-website.git
   ```

2. **Navigate to the Project Folder**: Change your current directory to the project folder:

   ```bash
   cd gym-website
   ```

3. **Install Dependencies**: Use npm or yarn to install project dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. **Set Up RapidAPI Keys**:

   - Sign up for a RapidAPI account if you don't have one.
   - Create API keys for the Exercise Database API and YouTube Search API.
   - In the project, locate the `config.js` file, and replace `"YOUR_EXERCISE_DB_API_KEY"` and `"YOUR_YOUTUBE_API_KEY"` with your actual API keys.

5. **Start the Development Server**: Run the following command to start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

6. **Open the Website**: Open your web browser and navigate to `http://localhost:3000` to view the Gym Website.

## Usage

- Explore the list of exercises provided by the Exercise Database API.
- Select an exercise to view detailed information and related YouTube videos.
- Search for specific exercises or browse exercises by category.
- Watch exercise-related videos by clicking on the video thumbnails.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test them thoroughly.
4. Commit your changes with clear and concise commit messages.
5. Push your changes to your forked repository.
6. Create a pull request to submit your changes for review.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to RapidAPI for providing the Exercise Database API and YouTube Search API.
- Special thanks to the Material UI team for their excellent UI components.

Feel free to customize and enhance this Gym Website project according to your requirements. Happy coding!
