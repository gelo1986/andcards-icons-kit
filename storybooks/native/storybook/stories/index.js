import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import React from "react";
import { View } from "react-native";
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
import EditAlt from "andcards-icons-kit/EditAlt";
import EmailAlt from "andcards-icons-kit/EmailAlt";
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

const COLOR = "#000000";
const SIZE = 50;

storiesOf("andcards-icons-kit", module)
  .add("General", () => (
    <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
      <AddAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Admin color={COLOR} size={SIZE} onPress={action("clicked")} />
      <ArrowDownAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <ArrowLeftAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <ArrowRightAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <ArrowUpAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <BeverageAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Call color={COLOR} size={SIZE} onPress={action("clicked")} />
      <CallAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Calendar color={COLOR} size={SIZE} onPress={action("clicked")} />
      <CalendarAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <CalendarExportAlt
        color={COLOR}
        size={SIZE}
        onPress={action("clicked")}
      />
      <CameraAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <CancelAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <CardBrokenAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <CreditCardAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Delete color={COLOR} size={SIZE} onPress={action("clicked")} />
      <DeleteAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Deleted color={COLOR} size={SIZE} onPress={action("clicked")} />
      <DeletedAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <DoneAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <EditAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <EmailAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Favorites color={COLOR} size={SIZE} onPress={action("clicked")} />
      <FavoritesAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Feed color={COLOR} size={SIZE} onPress={action("clicked")} />
      <FeedAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <FixedDeskAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Home color={COLOR} size={SIZE} onPress={action("clicked")} />
      <HotDeskAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Info color={COLOR} size={SIZE} onPress={action("clicked")} />
      <KitchenAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <InfoAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <LikeAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <LinkAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <ListAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <ListView color={COLOR} size={SIZE} onPress={action("clicked")} />
      <ListViewAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Location color={COLOR} size={SIZE} onPress={action("clicked")} />
      <LocationAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <LockerAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <LogoutAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <MeetingRoomAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Membership color={COLOR} size={SIZE} onPress={action("clicked")} />
      <MembershipAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <More color={COLOR} size={SIZE} onPress={action("clicked")} />
      <MoreAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Notices color={COLOR} size={SIZE} onPress={action("clicked")} />
      <NoticesAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <ParkingAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <PassAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <PhoneAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <PhotosAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <PinAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <PrinterAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <RemoveAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <ResetAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <RoomBookingAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <RotateLeftAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <RotateRightAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <RoundTheClockAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <SaveAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <SearchAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Settings color={COLOR} size={SIZE} onPress={action("clicked")} />
      <SettingsAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Share color={COLOR} size={SIZE} onPress={action("clicked")} />
      <ShareAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <SmartLock color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Statistics color={COLOR} size={SIZE} onPress={action("clicked")} />
      <SubscribeAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <SwitchAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <TabletAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <TimeAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <TranslationAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <User color={COLOR} size={SIZE} onPress={action("clicked")} />
      <UserAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <UserInviteAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Users color={COLOR} size={SIZE} onPress={action("clicked")} />
      <UsersAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Verified color={COLOR} size={SIZE} onPress={action("clicked")} />
      <WarningAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <WorldAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
    </View>
  ))
  .add("Brands", () => (
    <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
      <Apple color={COLOR} size={SIZE} onPress={action("clicked")} />
      <AppleAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Behance color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Cards color={COLOR} size={SIZE} onPress={action("clicked")} />
      <CardsAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Facebook color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Facetime color={COLOR} size={SIZE} onPress={action("clicked")} />
      <FacetimeAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Google color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Github color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Instagram color={COLOR} size={SIZE} onPress={action("clicked")} />
      <InstagramAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <KakaoPlus color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Kakaotalk color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Linkedin color={COLOR} size={SIZE} onPress={action("clicked")} />
      <LinkedinAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Medium color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Microsoft color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Naver color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Redhat color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Skype color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Telegram color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Twitter color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Ubuntu color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Viber color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Whatsapp color={COLOR} size={SIZE} onPress={action("clicked")} />
      <WhatsappAlt color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Yahoo color={COLOR} size={SIZE} onPress={action("clicked")} />
      <Youtube color={COLOR} size={SIZE} onPress={action("clicked")} />
    </View>
  ));
