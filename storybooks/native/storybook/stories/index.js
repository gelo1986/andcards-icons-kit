import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import Add from 'andcards-icons-kit/Add';
import Apple from 'andcards-icons-kit/Apple';
import AppleAlt from 'andcards-icons-kit/AppleAlt';
import ArrowDown from 'andcards-icons-kit/ArrowDown';
import ArrowLeft from 'andcards-icons-kit/ArrowLeft';
import ArrowRight from 'andcards-icons-kit/ArrowRight';
import ArrowUp from 'andcards-icons-kit/ArrowUp';
import Behance from 'andcards-icons-kit/Behance';
import Call from 'andcards-icons-kit/Call';
import CallAlt from 'andcards-icons-kit/CallAlt';
import Calendar from 'andcards-icons-kit/Calendar';
import CalendarAlt from 'andcards-icons-kit/CalendarAlt';
import CalendarExportAlt from 'andcards-icons-kit/CalendarExportAlt';
import CameraAlt from 'andcards-icons-kit/CameraAlt';
import Cancel from 'andcards-icons-kit/Cancel';
import CardBroken from 'andcards-icons-kit/CardBroken';
import Cards from 'andcards-icons-kit/Cards';
import CardsAlt from 'andcards-icons-kit/CardsAlt';
import Copy from 'andcards-icons-kit/Copy';
import CreditCard from 'andcards-icons-kit/CreditCard';
import Delete from 'andcards-icons-kit/Delete';
import DeleteAlt from 'andcards-icons-kit/DeleteAlt';
import Deleted from 'andcards-icons-kit/Deleted';
import DeletedAlt from 'andcards-icons-kit/DeletedAlt';
import Done from 'andcards-icons-kit/Done';
import EditAlt from 'andcards-icons-kit/EditAlt';
import Email from 'andcards-icons-kit/Email';
import Facebook from 'andcards-icons-kit/Facebook';
import Facetime from 'andcards-icons-kit/Facetime';
import FacetimeAlt from 'andcards-icons-kit/FacetimeAlt';
import Favorites from 'andcards-icons-kit/Favorites';
import FavoritesAlt from 'andcards-icons-kit/FavoritesAlt';
import FixedDesk from 'andcards-icons-kit/FixedDesk';
import Google from 'andcards-icons-kit/Google';
import Github from 'andcards-icons-kit/Github';
import HotDesk from 'andcards-icons-kit/HotDesk';
import Info from 'andcards-icons-kit/Info';
import InfoAlt from 'andcards-icons-kit/InfoAlt';
import Instagram from 'andcards-icons-kit/Instagram';
import InstagramAlt from 'andcards-icons-kit/InstagramAlt';
import KakaoPlus from 'andcards-icons-kit/KakaoPlus';
import Kakaotalk from 'andcards-icons-kit/Kakaotalk';
import Like from 'andcards-icons-kit/Like';
import Linkedin from 'andcards-icons-kit/Linkedin';
import LinkedinAlt from 'andcards-icons-kit/LinkedinAlt';
import List from 'andcards-icons-kit/List';
import ListView from 'andcards-icons-kit/ListView';
import ListViewAlt from 'andcards-icons-kit/ListViewAlt';
import Location from 'andcards-icons-kit/Location';
import LocationAlt from 'andcards-icons-kit/LocationAlt';
import Logout from 'andcards-icons-kit/Logout';
import Medium from 'andcards-icons-kit/Medium';
import MeetingRoom from 'andcards-icons-kit/MeetingRoom';
import Membership from 'andcards-icons-kit/Membership';
import MembershipAlt from 'andcards-icons-kit/MembershipAlt';
import Microsoft from 'andcards-icons-kit/Microsoft';
import More from 'andcards-icons-kit/More';
import MoreAlt from 'andcards-icons-kit/MoreAlt';
import Naver from 'andcards-icons-kit/Naver';
import Notices from 'andcards-icons-kit/Notices';
import NoticesAlt from 'andcards-icons-kit/NoticesAlt';
import Pass from 'andcards-icons-kit/Pass';
import Phone from 'andcards-icons-kit/Phone';
import Pinned from 'andcards-icons-kit/Pinned';
import Redhat from 'andcards-icons-kit/Redhat';
import ResetSetting from 'andcards-icons-kit/ResetSetting';
import Remove from 'andcards-icons-kit/Remove';
import RoomBooking from 'andcards-icons-kit/RoomBooking';
import RotateLeft from 'andcards-icons-kit/RotateLeft';
import RotateRight from 'andcards-icons-kit/RotateRight';
import RoundTheClock from 'andcards-icons-kit/RoundTheClock';
import Save from 'andcards-icons-kit/Save';
import Search from 'andcards-icons-kit/Search';
import Settings from 'andcards-icons-kit/Settings';
import SettingsAlt from 'andcards-icons-kit/SettingsAlt';
import Share from 'andcards-icons-kit/Share';
import ShareAlt from 'andcards-icons-kit/ShareAlt';
import Skype from 'andcards-icons-kit/Skype';
import SmartLock from 'andcards-icons-kit/SmartLock';
import Statistics from 'andcards-icons-kit/Statistics';
import Subscribe from 'andcards-icons-kit/Subscribe';
import Switch from 'andcards-icons-kit/Switch';
import Tablet from 'andcards-icons-kit/Tablet';
import Telegram from 'andcards-icons-kit/Telegram';
import Time from 'andcards-icons-kit/Time';
import Translation from 'andcards-icons-kit/Translation';
import Triangle from 'andcards-icons-kit/Triangle';
import Twitter from 'andcards-icons-kit/Twitter';
import Ubuntu from 'andcards-icons-kit/Ubuntu';
import User from 'andcards-icons-kit/User';
import UserAlt from 'andcards-icons-kit/UserAlt';
import UserInvite from 'andcards-icons-kit/UserInvite';
import Users from 'andcards-icons-kit/Users';
import UsersAlt from 'andcards-icons-kit/UsersAlt';
import Viber from 'andcards-icons-kit/Viber';
import Warning from 'andcards-icons-kit/Warning';
import Whatsapp from 'andcards-icons-kit/Whatsapp';
import WhatsappAlt from 'andcards-icons-kit/WhatsappAlt';
import World from 'andcards-icons-kit/World';
import Yahoo from 'andcards-icons-kit/Yahoo';
import Youtube from 'andcards-icons-kit/Youtube';

const COLOR = '#000000';
const SIZE = 50;

storiesOf('andcards-icons-kit', module)
  .add('General', () =>
    <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
      <Add color={COLOR} size={SIZE} onPress={action('clicked')} />
      <ArrowDown color={COLOR} size={SIZE} onPress={action('clicked')} />
      <ArrowLeft color={COLOR} size={SIZE} onPress={action('clicked')} />
      <ArrowRight color={COLOR} size={SIZE} onPress={action('clicked')} />
      <ArrowUp color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Call color={COLOR} size={SIZE} onPress={action('clicked')} />
      <CallAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Calendar color={COLOR} size={SIZE} onPress={action('clicked')} />
      <CalendarAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <CalendarExportAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <CameraAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Cancel color={COLOR} size={SIZE} onPress={action('clicked')} />
      <CardBroken color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Copy color={COLOR} size={SIZE} onPress={action('clicked')} />
      <CreditCard color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Delete color={COLOR} size={SIZE} onPress={action('clicked')} />
      <DeleteAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Deleted color={COLOR} size={SIZE} onPress={action('clicked')} />
      <DeletedAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Done color={COLOR} size={SIZE} onPress={action('clicked')} />
      <EditAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Email color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Favorites color={COLOR} size={SIZE} onPress={action('clicked')} />
      <FavoritesAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <FixedDesk color={COLOR} size={SIZE} onPress={action('clicked')} />
      <HotDesk color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Info color={COLOR} size={SIZE} onPress={action('clicked')} />
      <InfoAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Like color={COLOR} size={SIZE} onPress={action('clicked')} />
      <List color={COLOR} size={SIZE} onPress={action('clicked')} />
      <ListView color={COLOR} size={SIZE} onPress={action('clicked')} />
      <ListViewAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Location color={COLOR} size={SIZE} onPress={action('clicked')} />
      <LocationAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Logout color={COLOR} size={SIZE} onPress={action('clicked')} />
      <MeetingRoom color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Membership color={COLOR} size={SIZE} onPress={action('clicked')} />
      <MembershipAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <More color={COLOR} size={SIZE} onPress={action('clicked')} />
      <MoreAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Notices color={COLOR} size={SIZE} onPress={action('clicked')} />
      <NoticesAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Pass color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Phone color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Pinned color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Remove color={COLOR} size={SIZE} onPress={action('clicked')} />
      <ResetSetting color={COLOR} size={SIZE} onPress={action('clicked')} />
      <RoomBooking color={COLOR} size={SIZE} onPress={action('clicked')} />
      <RotateLeft color={COLOR} size={SIZE} onPress={action('clicked')} />
      <RotateRight color={COLOR} size={SIZE} onPress={action('clicked')} />
      <RoundTheClock color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Save color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Search color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Settings color={COLOR} size={SIZE} onPress={action('clicked')} />
      <SettingsAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Share color={COLOR} size={SIZE} onPress={action('clicked')} />
      <ShareAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <SmartLock color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Statistics color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Subscribe color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Switch color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Tablet color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Time color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Translation color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Triangle color={COLOR} size={SIZE} onPress={action('clicked')} />
      <User color={COLOR} size={SIZE} onPress={action('clicked')} />
      <UserAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <UserInvite color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Users color={COLOR} size={SIZE} onPress={action('clicked')} />
      <UsersAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Warning color={COLOR} size={SIZE} onPress={action('clicked')} />
      <World color={COLOR} size={SIZE} onPress={action('clicked')} />
    </View>
  )
.add('Logos', () =>
    <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
      <Apple color={COLOR} size={SIZE} onPress={action('clicked')} />
      <AppleAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Behance color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Cards color={COLOR} size={SIZE} onPress={action('clicked')} />
      <CardsAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Facebook color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Facetime color={COLOR} size={SIZE} onPress={action('clicked')} />
      <FacetimeAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Google color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Github color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Instagram color={COLOR} size={SIZE} onPress={action('clicked')} />
      <InstagramAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <KakaoPlus color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Kakaotalk color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Linkedin color={COLOR} size={SIZE} onPress={action('clicked')} />
      <LinkedinAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Medium color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Microsoft color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Naver color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Redhat color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Skype color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Telegram color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Twitter color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Ubuntu color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Viber color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Whatsapp color={COLOR} size={SIZE} onPress={action('clicked')} />
      <WhatsappAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Yahoo color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Youtube color={COLOR} size={SIZE} onPress={action('clicked')} />
    </View>
  );
