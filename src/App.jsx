import { useState, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import { productData } from "./assets/SampleData";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Button
} from "@chakra-ui/react";
import ScrollNav from "./components/ScrollNav";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <div className="bg-gray-700">
      <ScrollNav></ScrollNav>
      <button className="bg-white" ref={btnRef} onClick={onOpen}>
        drawer
      </button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay className="" />
        <DrawerContent className="bg-orange-400 max-w-xs">
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <header>logo/search/menu</header>
      <Link to={"steering-wheels"}>Steering Wheels</Link>
      <Link to={"pedals"}>Pedals</Link>
      {productData.map((data) => {
        return <div>{data.id}</div>;
      })}
      <Outlet></Outlet>
      <footer className="bg-red-500">xxx</footer>
    </div>
  );
}

export default App;
