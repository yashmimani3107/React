# Namaste React Learnings

# Food ordering App

Swiggy API Integration
React-based UI
Shimmer Effect
Top-rated Restaurants:
Search and Filters
Cart Management

create browser router -> react-router-dom


# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement (Refreshes page automatically )
- Use File watching Algorithm - written in c++
- Caching -> Faster Bulids (Parcel Cache)
- Image Optimization
- CSS Minification 
- Bundling 
- Compress
- Consistent Hashing
- Code Splitting 
- Differential Bundling - support Older Browsers
- Error Handling
- HTTPS
- Tree Shaking - remove unused code  
- Different bulid for dev and prod



# Two Types of export

-Default Export/Import 

export default <component name>
import name from "path"

- Named Export and Import 

export in front of variable

export const component name {

}

import {component name } from "path";

#  React Hooks


- normal js utility function / variable
- state variable -> super powerful variable
-useState()
-useEffect

whenever a state variable updates react will re render ui components

-useEffect 
if no dependency array => useEffect is called on every render
if dependency array is empty => useEffect is called only once (initail render)
if dependency array is given some depndency then changes if that component changes


rafce shortcut in vscode to create component

<a></a>
 dont use anchor to move to another page since reloads the whole page insted use links from react-router-dom library


#two type of routing 
-client side 
-server side