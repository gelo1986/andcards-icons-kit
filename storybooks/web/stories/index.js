import infoAddon from "@storybook/addon-info";
import { setAddon, storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import AddAlt from "andcards-icons-kit/AddAlt";
import Admin from "andcards-icons-kit/Admin";
import Apple from "andcards-icons-kit/Apple";
import AppleAlt from "andcards-icons-kit/AppleAlt";
import ArrowDownAlt from "andcards-icons-kit/ArrowDownAlt";
import ArrowLeftAlt from "andcards-icons-kit/ArrowLeftAlt";
import ArrowRightAlt from "andcards-icons-kit/ArrowRightAlt";
import ArrowUpAlt from "andcards-icons-kit/ArrowUpAlt";
import Behance from "andcards-icons-kit/Behance";
import BeverageAlt from "andcards-icons-kit/BeverageAlt";
import Call from "andcards-icons-kit/Call";
import CallAlt from "andcards-icons-kit/CallAlt";
import Calendar from "andcards-icons-kit/Calendar";
import CalendarAlt from "andcards-icons-kit/CalendarAlt";
import CalendarExportAlt from "andcards-icons-kit/CalendarExportAlt";
import CameraAlt from "andcards-icons-kit/CameraAlt";
import CancelAlt from "andcards-icons-kit/CancelAlt";
import CardBrokenAlt from "andcards-icons-kit/CardBrokenAlt";
import Cards from "andcards-icons-kit/Cards";
import CardsAlt from "andcards-icons-kit/CardsAlt";
import CreditCardAlt from "andcards-icons-kit/CreditCardAlt";
import Delete from "andcards-icons-kit/Delete";
import DeleteAlt from "andcards-icons-kit/DeleteAlt";
import Deleted from "andcards-icons-kit/Deleted";
import DeletedAlt from "andcards-icons-kit/DeletedAlt";
import DoneAlt from "andcards-icons-kit/DoneAlt";
import EmailAlt from "andcards-icons-kit/EmailAlt";
import EditAlt from "andcards-icons-kit/EditAlt";
import Facebook from "andcards-icons-kit/Facebook";
import Facetime from "andcards-icons-kit/Facetime";
import FacetimeAlt from "andcards-icons-kit/FacetimeAlt";
import Favorites from "andcards-icons-kit/Favorites";
import FavoritesAlt from "andcards-icons-kit/FavoritesAlt";
import Feed from "andcards-icons-kit/Feed";
import FeedAlt from "andcards-icons-kit/FeedAlt";
import FixedDeskAlt from "andcards-icons-kit/FixedDeskAlt";
import Google from "andcards-icons-kit/Google";
import Github from "andcards-icons-kit/Github";
import Home from "andcards-icons-kit/Home";
import HotDeskAlt from "andcards-icons-kit/HotDeskAlt";
import Info from "andcards-icons-kit/Info";
import InfoAlt from "andcards-icons-kit/InfoAlt";
import Instagram from "andcards-icons-kit/Instagram";
import InstagramAlt from "andcards-icons-kit/InstagramAlt";
import KakaoPlus from "andcards-icons-kit/KakaoPlus";
import Kakaotalk from "andcards-icons-kit/Kakaotalk";
import KitchenAlt from "andcards-icons-kit/KitchenAlt";
import LikeAlt from "andcards-icons-kit/LikeAlt";
import LinkAlt from "andcards-icons-kit/LinkAlt";
import Linkedin from "andcards-icons-kit/Linkedin";
import LinkedinAlt from "andcards-icons-kit/LinkedinAlt";
import ListAlt from "andcards-icons-kit/ListAlt";
import ListView from "andcards-icons-kit/ListView";
import ListViewAlt from "andcards-icons-kit/ListViewAlt";
import Location from "andcards-icons-kit/Location";
import LocationAlt from "andcards-icons-kit/LocationAlt";
import LockerAlt from "andcards-icons-kit/LockerAlt";
import LogoutAlt from "andcards-icons-kit/LogoutAlt";
import Medium from "andcards-icons-kit/Medium";
import MeetingRoomAlt from "andcards-icons-kit/MeetingRoomAlt";
import Membership from "andcards-icons-kit/Membership";
import MembershipAlt from "andcards-icons-kit/MembershipAlt";
import Microsoft from "andcards-icons-kit/Microsoft";
import More from "andcards-icons-kit/More";
import MoreAlt from "andcards-icons-kit/MoreAlt";
import Naver from "andcards-icons-kit/Naver";
import Notices from "andcards-icons-kit/Notices";
import NoticesAlt from "andcards-icons-kit/NoticesAlt";
import ParkingAlt from "andcards-icons-kit/ParkingAlt";
import PassAlt from "andcards-icons-kit/PassAlt";
import PhoneAlt from "andcards-icons-kit/PhoneAlt";
import PhotosAlt from "andcards-icons-kit/PhotosAlt";
import PinAlt from "andcards-icons-kit/PinAlt";
import Pinterest from "andcards-icons-kit/Pinterest";
import PrinterAlt from "andcards-icons-kit/PrinterAlt";
import Redhat from "andcards-icons-kit/Redhat";
import RemoveAlt from "andcards-icons-kit/RemoveAlt";
import ResetAlt from "andcards-icons-kit/ResetAlt";
import RoomBookingAlt from "andcards-icons-kit/RoomBookingAlt";
import RotateLeftAlt from "andcards-icons-kit/RotateLeftAlt";
import RotateRightAlt from "andcards-icons-kit/RotateRightAlt";
import RoundTheClockAlt from "andcards-icons-kit/RoundTheClockAlt";
import SaveAlt from "andcards-icons-kit/SaveAlt";
import SearchAlt from "andcards-icons-kit/SearchAlt";
import Settings from "andcards-icons-kit/Settings";
import SettingsAlt from "andcards-icons-kit/SettingsAlt";
import Share from "andcards-icons-kit/Share";
import ShareAlt from "andcards-icons-kit/ShareAlt";
import Skype from "andcards-icons-kit/Skype";
import SmartLock from "andcards-icons-kit/SmartLock";
import Statistics from "andcards-icons-kit/Statistics";
import SubscribeAlt from "andcards-icons-kit/SubscribeAlt";
import SwitchAlt from "andcards-icons-kit/SwitchAlt";
import TabletAlt from "andcards-icons-kit/TabletAlt";
import Telegram from "andcards-icons-kit/Telegram";
import TimeAlt from "andcards-icons-kit/TimeAlt";
import TranslationAlt from "andcards-icons-kit/TranslationAlt";
import Twitter from "andcards-icons-kit/Twitter";
import Ubuntu from "andcards-icons-kit/Ubuntu";
import User from "andcards-icons-kit/User";
import UserAlt from "andcards-icons-kit/UserAlt";
import UserInviteAlt from "andcards-icons-kit/UserInviteAlt";
import Users from "andcards-icons-kit/Users";
import UsersAlt from "andcards-icons-kit/UsersAlt";
import Verified from "andcards-icons-kit/Verified";
import Viber from "andcards-icons-kit/Viber";
import WarningAlt from "andcards-icons-kit/WarningAlt";
import Whatsapp from "andcards-icons-kit/Whatsapp";
import WhatsappAlt from "andcards-icons-kit/WhatsappAlt";
import WorldAlt from "andcards-icons-kit/WorldAlt";
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
          gridGap: 40,
          gridTemplateColumns: "repeat(auto-fit, 50px)"
        }}
      >
        <div>
          <AddAlt color={COLOR} size={SIZE} />
          AddAlt
        </div>
        <div>
          <Admin color={COLOR} size={SIZE} />
          Admin
        </div>
        <div>
          <ArrowDownAlt color={COLOR} size={SIZE} />
          ArrowDownAlt
        </div>
        <div>
          <ArrowLeftAlt color={COLOR} size={SIZE} />
          ArrowLeftAlt
        </div>
        <div>
          <ArrowRightAlt color={COLOR} size={SIZE} />
          ArrowRightAlt
        </div>
        <div>
          <ArrowUpAlt color={COLOR} size={SIZE} />
          ArrowUpAlt
        </div>
        <div>
          <BeverageAlt color={COLOR} size={SIZE} />
          BeverageAlt
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
          <CancelAlt color={COLOR} size={SIZE} />
          CancelAlt
        </div>
        <div>
          <CardBrokenAlt color={COLOR} size={SIZE} />
          CardBrokenAlt
        </div>
        <div>
          <CreditCardAlt color={COLOR} size={SIZE} />
          CreditCardAlt
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
          <DoneAlt color={COLOR} size={SIZE} />
          DoneAlt
        </div>
        <div>
          <EditAlt color={COLOR} size={SIZE} />
          EditAlt
        </div>
        <div>
          <EmailAlt color={COLOR} size={SIZE} />
          EmailAlt
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
          <Feed color={COLOR} size={SIZE} />
          Feed
        </div>
        <div>
          <FeedAlt color={COLOR} size={SIZE} />
          FeedAlt
        </div>
        <div>
          <FixedDeskAlt color={COLOR} size={SIZE} />
          FixedDeskAlt
        </div>
        <div>
          <Home color={COLOR} size={SIZE} />
          Home
        </div>
        <div>
          <HotDeskAlt color={COLOR} size={SIZE} />
          HotDeskAlt
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
          <KitchenAlt color={COLOR} size={SIZE} />
          KitchenAlt
        </div>
        <div>
          <LikeAlt color={COLOR} size={SIZE} />
          LikeAlt
        </div>
        <div>
          <LinkAlt color={COLOR} size={SIZE} />
          LinkAlt
        </div>
        <div>
          <ListAlt color={COLOR} size={SIZE} />
          ListAlt
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
          <LockerAlt color={COLOR} size={SIZE} />
          LockerAlt
        </div>
        <div>
          <LogoutAlt color={COLOR} size={SIZE} />
          LogoutAlt
        </div>
        <div>
          <MeetingRoomAlt color={COLOR} size={SIZE} />
          MeetingRoomAlt
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
          <ParkingAlt color={COLOR} size={SIZE} />
          ParkingAlt
        </div>
        <div>
          <PassAlt color={COLOR} size={SIZE} />
          PassAlt
        </div>
        <div>
          <PhoneAlt color={COLOR} size={SIZE} />
          PhoneAlt
        </div>
        <div>
          <PhotosAlt color={COLOR} size={SIZE} />
          PhotosAlt
        </div>
        <div>
          <PinAlt color={COLOR} size={SIZE} />
          PinAlt
        </div>
        <div>
          <PrinterAlt color={COLOR} size={SIZE} />
          PrinterAlt
        </div>
        <div>
          <RemoveAlt color={COLOR} size={SIZE} />
          RemoveAlt
        </div>
        <div>
          <ResetAlt color={COLOR} size={SIZE} />
          ResetAlt
        </div>
        <div>
          <RoomBookingAlt color={COLOR} size={SIZE} />
          RoomBookingAlt
        </div>
        <div>
          <RotateLeftAlt color={COLOR} size={SIZE} />
          RotateLeftAlt
        </div>
        <div>
          <RotateRightAlt color={COLOR} size={SIZE} />
          RotateRightAlt
        </div>
        <div>
          <RoundTheClockAlt color={COLOR} size={SIZE} />
          RoundTheClockAlt
        </div>
        <div>
          <SaveAlt color={COLOR} size={SIZE} />
          SaveAlt
        </div>
        <div>
          <SearchAlt color={COLOR} size={SIZE} />
          SearchAlt
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
          <SubscribeAlt color={COLOR} size={SIZE} />
          SubscribeAlt
        </div>
        <div>
          <SwitchAlt color={COLOR} size={SIZE} />
          SwitchAlt
        </div>
        <div>
          <TabletAlt color={COLOR} size={SIZE} />
          TabletAlt
        </div>
        <div>
          <TimeAlt color={COLOR} size={SIZE} />
          TimeAlt
        </div>
        <div>
          <TranslationAlt color={COLOR} size={SIZE} />
          TranslationAlt
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
          <UserInviteAlt color={COLOR} size={SIZE} />
          UserInviteAlt
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
          <WarningAlt color={COLOR} size={SIZE} />
          WarningAlt
        </div>
        <div>
          <WorldAlt color={COLOR} size={SIZE} />
          WorldAlt
        </div>
        <div>
          <Verified color={COLOR} size={SIZE} />
          Verified
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
          gridGap: 40,
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
    "Usage Examples",
    withInfo("")(() => (
      <div
        style={{
          fontFamily: "sans-serif",
          fontSize: 10
        }}
      >
        <div style={{ padding: 5 }}>
          <AddAlt
            color="#ffffff"
            size={SIZE}
            style={{ backgroundColor: "#0092cc" }}
          />
          <span style={{ padding: 5 }}>Blue</span>
        </div>
        <div style={{ padding: 5 }}>
          <AddAlt
            color="#ffffff"
            size={2 * SIZE}
            style={{ backgroundColor: "#e7043c" }}
          />
          <span style={{ padding: 5 }}>Red 2x</span>
        </div>
        <div style={{ padding: 5 }}>
          <AddAlt
            color="#ffffff"
            size={3 * SIZE}
            style={{ backgroundColor: "#ffd500" }}
          />
          <span style={{ padding: 5 }}>Yellow 3x</span>
        </div>
        <div style={{ padding: 5 }}>
          <AddAlt
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
