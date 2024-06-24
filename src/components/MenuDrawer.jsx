import {
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button
} from "@chakra-ui/react";

const MenuDrawer = ({ onClose, sticky }) => {
  return (
    <>
      <DrawerOverlay onClick={onClose} />
      <DrawerContent
        className={`${sticky ? "bg-green-400" : "bg-blue-400"} max-w-xs absolute`}
      >
        <div className={`${sticky ? "mt-[50px]" : ""} bg-white`}>
          <DrawerHeader>Create your account</DrawerHeader>
          <DrawerCloseButton />
        </div>

        <DrawerBody>
          <Input placeholder="Type here..." className="top-1/2" />
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </>
  );
};

export default MenuDrawer;
