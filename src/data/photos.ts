import type { ImageMetadata } from 'astro';
import type { L } from '@/i18n/ui';

import muttrahCorniche from '@/assets/photos/muttrah-corniche.jpg';
import muttrahWaterfront from '@/assets/photos/muttrah-waterfront.jpg';
import muttrahArchitecture from '@/assets/photos/muttrah-architecture.jpg';
import grandMosque from '@/assets/photos/grand-mosque.jpg';
import mosqueCourtyard from '@/assets/photos/mosque-courtyard.jpg';
import nizwaFort from '@/assets/photos/nizwa-fort.jpg';
import muscatHills from '@/assets/photos/muscat-hills.jpg';
import siteTeam from '@/assets/photos/site-team.jpg';
import manpowerTeam from '@/assets/photos/manpower-team.jpg';
import rebarWorks from '@/assets/photos/rebar-works.jpg';
import powerLinesSunset from '@/assets/photos/power-lines-sunset.jpg';
import transmissionTower from '@/assets/photos/transmission-tower.jpg';
import telecomAntennas from '@/assets/photos/telecom-antennas.jpg';
import telecomMast from '@/assets/photos/telecom-mast.jpg';
import buildingConstruction from '@/assets/photos/building-construction.jpg';
import craneSunset from '@/assets/photos/crane-sunset.jpg';
import industrialPlant from '@/assets/photos/industrial-plant.jpg';
import pipeline from '@/assets/photos/pipeline.jpg';
import solarField from '@/assets/photos/solar-field.jpg';
import meetingRoom from '@/assets/photos/meeting-room.jpg';
import boardroom from '@/assets/photos/boardroom.jpg';
import safetyBriefing from '@/assets/photos/safety-briefing.jpg';

export interface Photo {
  src: ImageMetadata;
  alt: L;
}

/**
 * Placeholder photography (free licences, see /credits/).
 * To swap a photo: replace the file in src/assets/photos keeping its name,
 * or import a new file here — every page references photos by these keys.
 */
export const photos = {
  muttrahCorniche: { src: muttrahCorniche, alt: { en: 'Muttrah corniche and mountains in Muscat', ar: 'كورنيش مطرح والجبال في مسقط' } },
  muttrahWaterfront: { src: muttrahWaterfront, alt: { en: 'Traditional waterfront buildings in Muttrah, Muscat', ar: 'مبانٍ تقليدية على واجهة مطرح البحرية في مسقط' } },
  muttrahArchitecture: { src: muttrahArchitecture, alt: { en: 'Omani architecture with wooden balconies in Muttrah', ar: 'عمارة عُمانية بشرفات خشبية في مطرح' } },
  grandMosque: { src: grandMosque, alt: { en: 'Sultan Qaboos Grand Mosque, Muscat', ar: 'جامع السلطان قابوس الأكبر، مسقط' } },
  mosqueCourtyard: { src: mosqueCourtyard, alt: { en: 'Marble courtyard and minaret of the Sultan Qaboos Grand Mosque', ar: 'الساحة الرخامية ومئذنة جامع السلطان قابوس الأكبر' } },
  nizwaFort: { src: nizwaFort, alt: { en: 'Nizwa Fort, Oman', ar: 'قلعة نزوى، عُمان' } },
  muscatHills: { src: muscatHills, alt: { en: 'View over Muscat from the Hajar mountains', ar: 'إطلالة على مسقط من جبال الحجر' } },
  siteTeam: { src: siteTeam, alt: { en: 'Site team in safety gear walking on a project site', ar: 'فريق عمل بمعدات السلامة في موقع مشروع' } },
  manpowerTeam: { src: manpowerTeam, alt: { en: 'Site worker in a white GGP hard hat and safety glasses holding a clipboard on a construction site', ar: 'عامل في الموقع بخوذة بيضاء تحمل شعار GGP ونظارات سلامة يحمل لوح ملاحظات في موقع إنشاء' } },
  rebarWorks: { src: rebarWorks, alt: { en: 'Worker preparing steel reinforcement on site', ar: 'عامل يجهّز حديد التسليح في الموقع' } },
  powerLinesSunset: { src: powerLinesSunset, alt: { en: 'Power transmission lines at sunset', ar: 'خطوط نقل الكهرباء عند الغروب' } },
  transmissionTower: { src: transmissionTower, alt: { en: 'High-voltage transmission tower', ar: 'برج نقل كهرباء عالي الجهد' } },
  telecomAntennas: { src: telecomAntennas, alt: { en: 'Telecommunication antennas on a tower', ar: 'هوائيات اتصالات على برج' } },
  telecomMast: { src: telecomMast, alt: { en: 'Telecommunication mast', ar: 'سارية اتصالات' } },
  buildingConstruction: { src: buildingConstruction, alt: { en: 'Building under construction with tower cranes', ar: 'مبنى قيد الإنشاء مع رافعات برجية' } },
  craneSunset: { src: craneSunset, alt: { en: 'Tower crane silhouetted at sunset', ar: 'رافعة برجية عند الغروب' } },
  industrialPlant: { src: industrialPlant, alt: { en: 'Industrial processing plant', ar: 'منشأة صناعية' } },
  pipeline: { src: pipeline, alt: { en: 'Pipeline sections laid along a construction corridor', ar: 'أنابيب ممدودة على مسار مشروع إنشائي' } },
  solarField: { src: solarField, alt: { en: 'Solar panel field', ar: 'حقل ألواح طاقة شمسية' } },
  meetingRoom: { src: meetingRoom, alt: { en: 'Meeting room prepared for a presentation', ar: 'قاعة اجتماعات مجهزة لعرض تقديمي' } },
  safetyBriefing: { src: safetyBriefing, alt: { en: 'Safety briefing for a site team in hard hats and high-visibility vests', ar: 'إحاطة سلامة لفريق عمل بالخوذ والسترات العاكسة في الموقع' } },
  boardroom: { src: boardroom, alt: { en: 'Modern boardroom', ar: 'قاعة اجتماعات حديثة' } },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;
