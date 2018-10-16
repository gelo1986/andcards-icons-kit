import infoAddon from "@storybook/addon-info";
import { setAddon, storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import Add from "andcards-icons-kit/Add";
import Apple from "andcards-icons-kit/Apple";
import AppleAlt from "andcards-icons-kit/AppleAlt";
import ArrowDown from "andcards-icons-kit/ArrowDown";
import ArrowLeft from "andcards-icons-kit/ArrowLeft";
import ArrowRight from "andcards-icons-kit/ArrowRight";
import ArrowUp from "andcards-icons-kit/ArrowUp";
import Behance from "andcards-icons-kit/Behance";
import Beverage from "andcards-icons-kit/Beverage";
import Call from "andcards-icons-kit/Call";
import CallAlt from "andcards-icons-kit/CallAlt";
import Calendar from "andcards-icons-kit/Calendar";
import CalendarAlt from "andcards-icons-kit/CalendarAlt";
import CalendarExportAlt from "andcards-icons-kit/CalendarExportAlt";
import CameraAlt from "andcards-icons-kit/CameraAlt";
import Cancel from "andcards-icons-kit/Cancel";
import CardBroken from "andcards-icons-kit/CardBroken";
import Cards from "andcards-icons-kit/Cards";
import CardsAlt from "andcards-icons-kit/CardsAlt";
import Copy from "andcards-icons-kit/Copy";
import CreditCard from "andcards-icons-kit/CreditCard";
import Delete from "andcards-icons-kit/Delete";
import DeleteAlt from "andcards-icons-kit/DeleteAlt";
import Deleted from "andcards-icons-kit/Deleted";
import DeletedAlt from "andcards-icons-kit/DeletedAlt";
import Done from "andcards-icons-kit/Done";
import Email from "andcards-icons-kit/Email";
import EditAlt from "andcards-icons-kit/EditAlt";
import Facebook from "andcards-icons-kit/Facebook";
import Facetime from "andcards-icons-kit/Facetime";
import FacetimeAlt from "andcards-icons-kit/FacetimeAlt";
import Favorites from "andcards-icons-kit/Favorites";
import FavoritesAlt from "andcards-icons-kit/FavoritesAlt";
import FixedDesk from "andcards-icons-kit/FixedDesk";
import Google from "andcards-icons-kit/Google";
import Github from "andcards-icons-kit/Github";
import HotDesk from "andcards-icons-kit/HotDesk";
import Info from "andcards-icons-kit/Info";
import InfoAlt from "andcards-icons-kit/InfoAlt";
import Instagram from "andcards-icons-kit/Instagram";
import InstagramAlt from "andcards-icons-kit/InstagramAlt";
import KakaoPlus from "andcards-icons-kit/KakaoPlus";
import Kakaotalk from "andcards-icons-kit/Kakaotalk";
import Kitchen from "andcards-icons-kit/Kitchen";
import Like from "andcards-icons-kit/Like";
import Linkedin from "andcards-icons-kit/Linkedin";
import LinkedinAlt from "andcards-icons-kit/LinkedinAlt";
import List from "andcards-icons-kit/List";
import ListView from "andcards-icons-kit/ListView";
import ListViewAlt from "andcards-icons-kit/ListViewAlt";
import Location from "andcards-icons-kit/Location";
import LocationAlt from "andcards-icons-kit/LocationAlt";
import Locker from "andcards-icons-kit/Locker";
import Logout from "andcards-icons-kit/Logout";
import Medium from "andcards-icons-kit/Medium";
import MeetingRoom from "andcards-icons-kit/MeetingRoom";
import Membership from "andcards-icons-kit/Membership";
import MembershipAlt from "andcards-icons-kit/MembershipAlt";
import Microsoft from "andcards-icons-kit/Microsoft";
import More from "andcards-icons-kit/More";
import MoreAlt from "andcards-icons-kit/MoreAlt";
import Naver from "andcards-icons-kit/Naver";
import Notices from "andcards-icons-kit/Notices";
import NoticesAlt from "andcards-icons-kit/NoticesAlt";
import Parking from "andcards-icons-kit/Parking";
import Pass from "andcards-icons-kit/Pass";
import Phone from "andcards-icons-kit/Phone";
import Photos from "andcards-icons-kit/Photos";
import Pinned from "andcards-icons-kit/Pinned";
import Pinterest from "andcards-icons-kit/Pinterest";
import Printer from "andcards-icons-kit/Printer";
import Redhat from "andcards-icons-kit/Redhat";
import ResetSetting from "andcards-icons-kit/ResetSetting";
import Remove from "andcards-icons-kit/Remove";
import RoomBooking from "andcards-icons-kit/RoomBooking";
import RotateLeft from "andcards-icons-kit/RotateLeft";
import RotateRight from "andcards-icons-kit/RotateRight";
import RoundTheClock from "andcards-icons-kit/RoundTheClock";
import Save from "andcards-icons-kit/Save";
import Search from "andcards-icons-kit/Search";
import Settings from "andcards-icons-kit/Settings";
import SettingsAlt from "andcards-icons-kit/SettingsAlt";
import Share from "andcards-icons-kit/Share";
import ShareAlt from "andcards-icons-kit/ShareAlt";
import Skype from "andcards-icons-kit/Skype";
import SmartLock from "andcards-icons-kit/SmartLock";
import Statistics from "andcards-icons-kit/Statistics";
import Subscribe from "andcards-icons-kit/Subscribe";
import Switch from "andcards-icons-kit/Switch";
import Tablet from "andcards-icons-kit/Tablet";
import Telegram from "andcards-icons-kit/Telegram";
import Time from "andcards-icons-kit/Time";
import Translation from "andcards-icons-kit/Translation";
import Triangle from "andcards-icons-kit/Triangle";
import Twitter from "andcards-icons-kit/Twitter";
import Ubuntu from "andcards-icons-kit/Ubuntu";
import User from "andcards-icons-kit/User";
import UserAlt from "andcards-icons-kit/UserAlt";
import UserInvite from "andcards-icons-kit/UserInvite";
import Users from "andcards-icons-kit/Users";
import UsersAlt from "andcards-icons-kit/UsersAlt";
import Viber from "andcards-icons-kit/Viber";
import Warning from "andcards-icons-kit/Warning";
import Whatsapp from "andcards-icons-kit/Whatsapp";
import WhatsappAlt from "andcards-icons-kit/WhatsappAlt";
import World from "andcards-icons-kit/World";
import Yahoo from "andcards-icons-kit/Yahoo";
import Youtube from "andcards-icons-kit/Youtube";
import React from "react";

setAddon(infoAddon);

const COLOR = "#000000";
const SIZE = 50;

storiesOf("andcards-icons-kit", module)
  .add(
    "General",
    withInfo("")(() => (
      <div
        style={{
          display: "grid",
          fontFamily: "sans-serif",
          fontSize: 10,
          textAlign: "center",
          gridGap: 30,
          gridTemplateColumns: "repeat(auto-fit, 50px)"
        }}
      >
        <div>
          <Add color={COLOR} size={SIZE} />
          Add
        </div>
        <div>
          <ArrowDown color={COLOR} size={SIZE} />
          ArrowDown
        </div>
        <div>
          <ArrowLeft color={COLOR} size={SIZE} />
          ArrowLeft
        </div>
        <div>
          <ArrowRight color={COLOR} size={SIZE} />
          ArrowRight
        </div>
        <div>
          <ArrowUp color={COLOR} size={SIZE} />
          ArrowUp
        </div>
        <div>
          <Beverage color={COLOR} size={SIZE} />
          Beverage
        </div>
        <div>
          <Call color={COLOR} size={SIZE} />
          Call
        </div>
        <div>
          <CallAlt color={COLOR} size={SIZE} />
          CallAlt
        </div>
        <div>
          <Calendar color={COLOR} size={SIZE} />
          Calendar
        </div>
        <div>
          <CalendarAlt color={COLOR} size={SIZE} />
          CalendarAlt
        </div>
        <div>
          <CalendarExportAlt color={COLOR} size={SIZE} />
          CalendarExportAlt
        </div>
        <div>
          <CameraAlt color={COLOR} size={SIZE} />
          CameraAlt
        </div>
        <div>
          <Cancel color={COLOR} size={SIZE} />
          Cancel
        </div>
        <div>
          <CardBroken color={COLOR} size={SIZE} />
          CardBroken
        </div>
        <div>
          <Copy color={COLOR} size={SIZE} />
          Copy
        </div>
        <div>
          <CreditCard color={COLOR} size={SIZE} />
          CreditCard
        </div>
        <div>
          <Delete color={COLOR} size={SIZE} />
          Delete
        </div>
        <div>
          <DeleteAlt color={COLOR} size={SIZE} />
          DeleteAlt
        </div>
        <div>
          <Deleted color={COLOR} size={SIZE} />
          Deleted
        </div>
        <div>
          <DeletedAlt color={COLOR} size={SIZE} />
          DeletedAlt
        </div>
        <div>
          <Done color={COLOR} size={SIZE} />
          Done
        </div>
        <div>
          <EditAlt color={COLOR} size={SIZE} />
          EditAlt
        </div>
        <div>
          <Email color={COLOR} size={SIZE} />
          Email
        </div>
        <div>
          <Favorites color={COLOR} size={SIZE} />
          Favorites
        </div>
        <div>
          <FavoritesAlt color={COLOR} size={SIZE} />
          FavoritesAlt
        </div>
        <div>
          <FixedDesk color={COLOR} size={SIZE} />
          FixedDesk
        </div>
        <div>
          <HotDesk color={COLOR} size={SIZE} />
          HotDesk
        </div>
        <div>
          <Info color={COLOR} size={SIZE} />
          Info
        </div>
        <div>
          <InfoAlt color={COLOR} size={SIZE} />
          InfoAlt
        </div>
        <div>
          <Kitchen color={COLOR} size={SIZE} />
          Kitchen
        </div>
        <div>
          <Like color={COLOR} size={SIZE} />
          Like
        </div>
        <div>
          <List color={COLOR} size={SIZE} />
          List
        </div>
        <div>
          <ListView color={COLOR} size={SIZE} />
          ListView
        </div>
        <div>
          <ListViewAlt color={COLOR} size={SIZE} />
          ListViewAlt
        </div>
        <div>
          <Location color={COLOR} size={SIZE} />
          Location
        </div>
        <div>
          <LocationAlt color={COLOR} size={SIZE} />
          LocationAlt
        </div>
        <div>
          <Locker color={COLOR} size={SIZE} />
          Locker
        </div>
        <div>
          <Logout color={COLOR} size={SIZE} />
          Logout
        </div>
        <div>
          <MeetingRoom color={COLOR} size={SIZE} />
          MeetingRoom
        </div>
        <div>
          <Membership color={COLOR} size={SIZE} />
          Membership
        </div>
        <div>
          <MembershipAlt color={COLOR} size={SIZE} />
          MembershipAlt
        </div>
        <div>
          <More color={COLOR} size={SIZE} />
          More
        </div>
        <div>
          <MoreAlt color={COLOR} size={SIZE} />
          MoreAlt
        </div>
        <div>
          <Notices color={COLOR} size={SIZE} />
          Notices
        </div>
        <div>
          <NoticesAlt color={COLOR} size={SIZE} />
          NoticesAlt
        </div>
        <div>
          <Parking color={COLOR} size={SIZE} />
          Parking
        </div>
        <div>
          <Pass color={COLOR} size={SIZE} />
          Pass
        </div>
        <div>
          <Phone color={COLOR} size={SIZE} />
          Phone
        </div>
        <div>
          <Photos color={COLOR} size={SIZE} />
          Photos
        </div>
        <div>
          <Pinned color={COLOR} size={SIZE} />
          Pinned
        </div>
        <div>
          <Printer color={COLOR} size={SIZE} />
          Printer
        </div>
        <div>
          <Remove color={COLOR} size={SIZE} />
          Remove
        </div>
        <div>
          <ResetSetting color={COLOR} size={SIZE} />
          ResetSetting
        </div>
        <div>
          <RoomBooking color={COLOR} size={SIZE} />
          RoomBooking
        </div>
        <div>
          <RotateLeft color={COLOR} size={SIZE} />
          RotateLeft
        </div>
        <div>
          <RotateRight color={COLOR} size={SIZE} />
          RotateRight
        </div>
        <div>
          <RoundTheClock color={COLOR} size={SIZE} />
          RoundTheClock
        </div>
        <div>
          <Save color={COLOR} size={SIZE} />
          Save
        </div>
        <div>
          <Search color={COLOR} size={SIZE} />
          Search
        </div>
        <div>
          <Settings color={COLOR} size={SIZE} />
          Settings
        </div>
        <div>
          <SettingsAlt color={COLOR} size={SIZE} />
          SettingsAlt
        </div>
        <div>
          <Share color={COLOR} size={SIZE} />
          Share
        </div>
        <div>
          <ShareAlt color={COLOR} size={SIZE} />
          ShareAlt
        </div>
        <div>
          <SmartLock color={COLOR} size={SIZE} />
          SmartLock
        </div>
        <div>
          <Statistics color={COLOR} size={SIZE} />
          Statistics
        </div>
        <div>
          <Subscribe color={COLOR} size={SIZE} />
          Subscribe
        </div>
        <div>
          <Switch color={COLOR} size={SIZE} />
          Switch
        </div>
        <div>
          <Tablet color={COLOR} size={SIZE} />
          Tablet
        </div>
        <div>
          <Time color={COLOR} size={SIZE} />
          Time
        </div>
        <div>
          <Translation color={COLOR} size={SIZE} />
          Translation
        </div>
        <div>
          <Triangle color={COLOR} size={SIZE} />
          Triangle
        </div>
        <div>
          <User color={COLOR} size={SIZE} />
          User
        </div>
        <div>
          <UserAlt color={COLOR} size={SIZE} />
          UserAlt
        </div>
        <div>
          <UserInvite color={COLOR} size={SIZE} />
          UserInvite
        </div>
        <div>
          <Users color={COLOR} size={SIZE} />
          Users
        </div>
        <div>
          <UsersAlt color={COLOR} size={SIZE} />
          UsersAlt
        </div>
        <div>
          <Warning color={COLOR} size={SIZE} />
          Warning
        </div>
        <div>
          <World color={COLOR} size={SIZE} />
          World
        </div>
      </div>
    ))
  )
  .add(
    "Brands",
    withInfo("")(() => (
      <div
        style={{
          display: "grid",
          fontFamily: "sans-serif",
          fontSize: 10,
          textAlign: "center",
          gridGap: 30,
          gridTemplateColumns: "repeat(auto-fit, 50px)"
        }}
      >
        <div>
          <Apple color={COLOR} size={SIZE} />
          Apple
        </div>
        <div>
          <AppleAlt color={COLOR} size={SIZE} />
          AppleAlt
        </div>
        <div>
          <Behance color={COLOR} size={SIZE} />
          Behance
        </div>
        <div>
          <Cards color={COLOR} size={SIZE} />
          Cards
        </div>
        <div>
          <CardsAlt color={COLOR} size={SIZE} />
          CardsAlt
        </div>
        <div>
          <Facebook color={COLOR} size={SIZE} />
          Facebook
        </div>
        <div>
          <Facetime color={COLOR} size={SIZE} />
          Facetime
        </div>
        <div>
          <FacetimeAlt color={COLOR} size={SIZE} />
          FacetimeAlt
        </div>
        <div>
          <Google color={COLOR} size={SIZE} />
          Google
        </div>
        <div>
          <Github color={COLOR} size={SIZE} />
          Github
        </div>
        <div>
          <Instagram color={COLOR} size={SIZE} />
          Instagram
        </div>
        <div>
          <InstagramAlt color={COLOR} size={SIZE} />
          InstagramAlt
        </div>
        <div>
          <KakaoPlus color={COLOR} size={SIZE} />
          KakaoPlus
        </div>
        <div>
          <Kakaotalk color={COLOR} size={SIZE} />
          KakaoTalk
        </div>
        <div>
          <Linkedin color={COLOR} size={SIZE} />
          Linkedin
        </div>
        <div>
          <LinkedinAlt color={COLOR} size={SIZE} />
          LinkedinAlt
        </div>
        <div>
          <Medium color={COLOR} size={SIZE} />
          Medium
        </div>
        <div>
          <Microsoft color={COLOR} size={SIZE} />
          Microsoft
        </div>
        <div>
          <Naver color={COLOR} size={SIZE} />
          Naver
        </div>
        <div>
          <Pinterest color={COLOR} size={SIZE} />
          Pinterest
        </div>
        <div>
          <Redhat color={COLOR} size={SIZE} />
          Redhat
        </div>
        <div>
          <Skype color={COLOR} size={SIZE} />
          Skype
        </div>
        <div>
          <Telegram color={COLOR} size={SIZE} />
          Telegram
        </div>
        <div>
          <Twitter color={COLOR} size={SIZE} />
          Twitter
        </div>
        <div>
          <Ubuntu color={COLOR} size={SIZE} />
          Ubuntu
        </div>
        <div>
          <Viber color={COLOR} size={SIZE} />
          Viber
        </div>
        <div>
          <Whatsapp color={COLOR} size={SIZE} />
          Whatsapp
        </div>
        <div>
          <WhatsappAlt color={COLOR} size={SIZE} />
          WhatsappAlt
        </div>
        <div>
          <Yahoo color={COLOR} size={SIZE} />
          Yahoo
        </div>
        <div>
          <Youtube color={COLOR} size={SIZE} />
          Youtube
        </div>
      </div>
    ))
  )
  .add(
    "Playground",
    withInfo("")(() => (
      <div
        style={{
          fontFamily: "sans-serif",
          fontSize: 10
        }}
      >
        <div style={{ padding: 5 }}>
          <Add
            color="#ffffff"
            size={SIZE}
            style={{ backgroundColor: "#0092cc" }}
          />
          <span style={{ padding: 5 }}>Blue</span>
        </div>
        <div style={{ padding: 5 }}>
          <Add
            color="#ffffff"
            size={2 * SIZE}
            style={{ backgroundColor: "#e7043c" }}
          />
          <span style={{ padding: 5 }}>Red 2x</span>
        </div>
        <div style={{ padding: 5 }}>
          <Add
            color="#ffffff"
            size={3 * SIZE}
            style={{ backgroundColor: "#ffd500" }}
          />
          <span style={{ padding: 5 }}>Yellow 3x</span>
        </div>
        <div style={{ padding: 5 }}>
          <Add
            color="#ffffff"
            size={SIZE}
            style={{ backgroundColor: "#00994d" }}
            onClick={action("onMouseDown")}
            onMouseDown={action("onMouseDown")}
            onMouseUp={action("onMouseUp")}
          />
          <span style={{ padding: 5 }}>Green with Actions</span>
        </div>
      </div>
    ))
  );
