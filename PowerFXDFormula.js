// Power FX Template for Power Apps
// This template serves as a starting point for building apps.
// I would typically save this in the Formula section of my Power App
// Author: Thato Seluku 

//----------------------------------------
// Initialization and Default Settings
//----------------------------------------

// Set default variables and context variables when the app starts
Set(CurrentUser, User().Email);       // Store current user's email for easy reference

//----------------------------------------
// Theme Colours: These should be adjusted as needed
//----------------------------------------

Theme = {
    // Primary Colors
    PrimaryAccent: RGBA(0, 120, 212, 1), // #0078D4
    SecondaryAccent: RGBA(40, 167, 69, 1), // #28A745

    // Neutral Colors
    BackgroundLight: RGBA(244, 244, 244, 1), // #F4F4F4
    BackgroundDark: RGBA(26, 26, 26, 1), // #1A1A1A
    Border: RGBA(217, 217, 217, 1), // #D9D9D9

    // Highlight Colors
    Warning: RGBA(255, 193, 7, 1), // #FFC107
    Error: RGBA(220, 53, 69, 1), // #DC3545
    Info: RGBA(23, 162, 184, 1), // #17A2B8

    // Text Colors
    PrimaryText: RGBA(33, 37, 41, 1), // #212529
    SecondaryText: RGBA(108, 117, 125, 1), // #6C757D

    // Gradients
    GradientStart: RGBA(0, 120, 212, 1), // Blue (#0078D4)
    GradientEnd: RGBA(40, 167, 69, 1), // Green (#28A745)

//Text values:

// Primary Colors
    PrimaryAccentText:  "#0078D4",
    SecondaryAccentText: "#28A745",

    // Neutral Colors
    BackgroundLightText:  "#F4F4F4",
    BackgroundDarkText: "#1A1A1A",
    BorderText: "#D9D9D9",

    // Highlight Colors
    WarningText: "#FFC107",
    ErrorText:"#DC3545",
    InfoText: "#17A2B8",

    // Text Colors
    PrimaryTextColor: "#212529",
    SecondaryTextColor: "#6C757D",

    // Gradients
    GradientStartText: "#0078D4",
    GradientEndText: "#28A745"


};

//----------------------------------------
// Default icon initialisation: These should be adjusted to client needs
// These are found on W3
//----------------------------------------

MyIcons = 
{
    Home: "<svg xmlns='http://www.w3.org/2000/svg' id='Layer_1' data-name='Layer 1' viewBox='0 0 24 24' width='512' height='512'><path fill='currentColor' d='M22,5.724V1.987c0-.553-.447-1-1-1s-1,.447-1,1v2.379L14.797,.855c-1.699-1.146-3.895-1.146-5.594,0L2.204,5.579c-1.38,.93-2.204,2.479-2.204,4.145v9.276c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V9.724c0-1.581-.744-3.058-2-3.999Zm0,13.276c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V9.724c0-.999,.494-1.929,1.322-2.486L10.322,2.514c.51-.345,1.094-.517,1.678-.517s1.168,.172,1.678,.517l7.001,4.724c.827,.558,1.321,1.487,1.321,2.486v9.276Z'/></svg>",
    HomeFill: "<svg xmlns='http://www.w3.org/2000/svg' id='Layer_1' data-name='Layer 1' viewBox='0 0 24 24' width='512' height='512'><path fill='currentColor' d='M22,5.735V1.987c0-.553-.447-1-1-1s-1,.447-1,1v2.379L14.797,.855c-1.699-1.146-3.895-1.146-5.594,0L2.204,5.579c-1.38,.93-2.204,2.479-2.204,4.145v9.276c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V9.724c0-1.579-.748-3.047-2-3.989Z'/></svg>",
    Folder: "<svg xmlns='http://www.w3.org/2000/svg' id='Outline' viewBox='0 0 24 24' width='512' height='512'><path fill='currentColor' d='M19,3H12.472a1.019,1.019,0,0,1-.447-.1L8.869,1.316A3.014,3.014,0,0,0,7.528,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V8A5.006,5.006,0,0,0,19,3ZM5,3H7.528a1.019,1.019,0,0,1,.447.1l3.156,1.579A3.014,3.014,0,0,0,12.472,5H19a3,3,0,0,1,2.779,1.882L2,6.994V6A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V8.994l20-.113V18A3,3,0,0,1,19,21Z'/></svg>",
    FolderFill: "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Capa_1' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve' width='512' height='512'><g>
    <path fill='currentColor' d='M0,191.808V384c0.071,58.881,47.786,106.596,106.667,106.667h298.667C464.214,490.596,511.93,442.881,512,384V189.44   L0,191.808z'/>
    <path fill='currentColor' d='M405.333,64H266.069c-3.299,0.022-6.56-0.708-9.536-2.133l-67.328-33.792c-8.888-4.426-18.679-6.733-28.608-6.741h-53.931   C47.786,21.404,0.071,69.119,0,128v21.141l509.077-2.368C497.961,98.408,454.959,64.099,405.333,64z'/></g></svg>",
    List: "<svg xmlns='http://www.w3.org/2000/svg' id='Layer_1' data-name='Layer 1' viewBox='0 0 24 24'><path fill='currentColor' d='m19,1H5C2.243,1,0,3.243,0,6v12c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V6c0-2.757-2.243-5-5-5Zm3,17c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V6c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v12Zm-3-11c0,.552-.448,1-1,1h-7c-.552,0-1-.448-1-1s.448-1,1-1h7c.552,0,1,.448,1,1Zm-11,0c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm11,5c0,.552-.448,1-1,1h-7c-.552,0-1-.448-1-1s.448-1,1-1h7c.552,0,1,.448,1,1Zm-11,0c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm11,5c0,.552-.448,1-1,1h-7c-.552,0-1-.448-1-1s.448-1,1-1h7c.552,0,1,.448,1,1Zm-11,0c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Z'/></svg>",
    ListFill: "<svg xmlns='http://www.w3.org/2000/svg' id='Layer_1' data-name='Layer 1' viewBox='0 0 24 24'><path fill='currentColor' d='m19,1H5C2.243,1,0,3.243,0,6v12c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V6c0-2.757-2.243-5-5-5ZM6.5,18.5c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5.672,1.5,1.5-.672,1.5-1.5,1.5Zm0-5c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5.672,1.5,1.5-.672,1.5-1.5,1.5Zm0-5c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5.672,1.5,1.5-.672,1.5-1.5,1.5Zm11.5,9.5h-7c-.552,0-1-.448-1-1s.448-1,1-1h7c.552,0,1,.448,1,1s-.448,1-1,1Zm0-5h-7c-.552,0-1-.448-1-1s.448-1,1-1h7c.552,0,1,.448,1,1s-.448,1-1,1Zm0-5h-7c-.552,0-1-.448-1-1s.448-1,1-1h7c.552,0,1,.448,1,1s-.448,1-1,1Z'/></svg>",
    Hamburger: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 17h14M5 12h14M5 7h14'/></svg>"
};

//----------------------------------------
// Menu Items: This is used for your side menu for easy reference too
// Resource: https://www.youtube.com/watch?v=dP74npyyvGc 
//----------------------------------------

MenuItems=[
    {
        ID: 1, 
        Name: "Home",
        Icon: MyIcons.Home, 
        IconFill: MyIcons.HomeFill,
        Screen: Landing
    
    },
    {
        ID: 2, 
        Name: "Tasks",
        Icon: MyIcons.List, 
        IconFill: MyIcons.ListFill,
        Screen: Task_Screen
    
    },{
        ID: 3, 
        Name: "Project",
        Icon: MyIcons.Folder, 
        IconFill: MyIcons.FolderFill,
        Screen: Project_Screen
    
    }

    ];


//----------------------------------------
// Notes and Best Practices
//----------------------------------------
// 1. Replace placeholder names (e.g., DataSourceName, ColumnName, etc.) with actual values.
// 2. Use meaningful variable and control names for better readability.
// 3. Test your app thoroughly to ensure all logic works as intended.
