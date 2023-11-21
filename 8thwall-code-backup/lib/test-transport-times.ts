const testWalkResponse = [
  {
    startTime: '2021-05-18T11:16:41+00:00',
    duration: 2449,
    walkDistance: 2902.3380000216403,
    legs: [
      {
        transportMode: 'foot',
        duration: 2449,
        distance: 2901.748,
        startTime: '2021-05-18T11:16:41+00:00',
        line: null,
        lineDirection: null,
        numStops: 0,
        fromPlaceName: 'Origin',
        toPlaceName: 'Destination',
        polyLine: {
          length: 162,
          code: 'iaryK}arvAMqA[ZMLK@EACAUo@GSi@wBq@qCq@mCESw@qDc@oCe@uCUwACMMy@QkAcCkO}@mFmBoJw@gEk@qCsByJ}AcHMe@MA{Eg@KDQVUZIFGBG?IAeBcAs@a@YQIGEGES[wAQq@eBaIEOqByI[sAI]CMCMc@uB{@oDGUIa@EUQ{@q@uDEYmAyGE[Ig@SgASwAEUY{BOqAEc@Gc@C_@CUC_@e@eFC]C_@KkAAK]wEC_@KLeB~AG@GECGAQs@iKCc@QHMDMBKCQOAGEKEQCOCe@Cs@KiCCm@GMGIIEEAAFAFCDEDC@E?CCCCCEAGIECCCCGEIEGEKIOU??c@Ya@]Qk@GSGU?K?IAKAICGCGCCCCE?C@WYQg@O]Ii@Im@Is@QgBOuBK{AIyAI{ACaAKoCGBKIw@}@AAGIGKCpAEnAA^?P',
        },
      },
    ],
  },
]

const testBikeResponse = [
  {
    startTime: '2021-05-18T11:18:35+00:00',
    duration: 922,
    walkDistance: 3850.560800000003,
    legs: [
      {
        transportMode: 'bicycle',
        duration: 922,
        distance: 3850.3010000000013,
        startTime: '2021-05-18T11:18:35+00:00',
        line: null,
        lineDirection: null,
        numStops: 0,
        fromPlaceName: 'Origin',
        toPlaceName: 'Destination',
        polyLine: {
          length: 204,
          code: 'iaryK}arvAMqAKiAGi@Eg@Iu@WeCU}BE_@m@eGOsBIsAIuAE_BEiAAiACgBEuHEcJIuM?uAGcLIiLC_BKmHMyHOmII{FEeDMmII_EO_GSwHEuAAeB?k@@CBQ?QAQAOEKEEG?EBEHAFADIPGLOROPuC`BqCzAKFKF_@Pu@p@_@ZSTUNMGIAYEMEICEASKGEISESC]Ec@Ao@EwBUwSM@G?MyKCMCACBs@pBCDQRaAn@{AdA}@j@w@j@]\\]f@Yn@Ud@IVUn@s@jBAWC[C?AAq@iJy@qOGFIDCC}AlAaAv@AYMHMH_BrAIHiA`AOJMHoAbAMJQJMJEBo@d@[VOLMJ]Xk@b@c@\\QLQHMDMBKCQOAGEKEQCOCe@Cs@KiCCm@Ce@CUCGCEAACCGMCIAGCEE_@C]MBI?@a@?e@Ag@g@{AEQk@l@KJEHEDGDEBEGCQEPSe@EBEPCGIEKAEAECKOIQIQIYGYGc@Gq@Is@Gs@IcAGy@MaCKeBM{CEkAIDGBKIw@}@AAGIIrE?d@AdAEK@_BCK',
        },
      },
    ],
  },
]

const testPublicTransportResponse = [
  {
    startTime: '2021-05-18T11:22:01+00:00',
    duration: 1814,
    walkDistance: 1583.813923100652,
    legs: [
      {
        transportMode: 'foot',
        duration: 599,
        distance: 723.439,
        startTime: '2021-05-18T11:22:01+00:00',
        line: null,
        lineDirection: null,
        numStops: 0,
        fromPlaceName: 'Origin',
        toPlaceName: 'Bodø lufthavn',
        polyLine: {
          length: 39,
          code: 'iaryK}arvAMqAKiAGi@Eg@Iu@WeCU}BE_@m@eGOsBIsAIuAE_BEiAAiACgBEuHEcJIuMBABA?U@OBKDIFEPAFAFAFADCDE@G@IBOBk@?oAEiF',
        },
      },
      {
        transportMode: 'bus',
        duration: 453,
        distance: 2088.1917135646836,
        startTime: '2021-05-18T11:32:00+00:00',
        line: '1',
        lineDirection: 'Bjørndalslia',
        numStops: 4,
        fromPlaceName: 'Bodø lufthavn',
        toPlaceName: 'Orestad park',
        polyLine: {
          length: 6,
          code: 'oeryKubuvAwTo}AsMnVoGfPeUea@}A_u@',
        },
      },
      {
        transportMode: 'foot',
        duration: 762,
        distance: 859.7280000000001,
        startTime: '2021-05-18T11:39:33+00:00',
        line: null,
        lineDirection: null,
        numStops: 0,
        fromPlaceName: 'Orestad park',
        toPlaceName: 'Destination',
        polyLine: {
          length: 99,
          code: 'mktyKspyvADp@IFIFP|DC@CJCLENCPARCPCLEJCBC?@`@]X@TOLMJ]Xk@b@c@\\QLQHMDMBKCQOAGEKEQCOCe@Cs@KiCCm@GMGIIEEAAFAFCDEDC@E?CCCCCEAGIECCCCGEIEGEKIOU??c@Ya@]Qk@GSGU?K?IAKAICGCGCCCCE?C@WYQg@O]Ii@Im@Is@QgBOuBK{AIyAI{ACaAKoCGBKIw@}@AAGIGKCpAEnAA^?P',
        },
      },
    ],
  },
  {
    startTime: '2021-05-18T11:26:01+00:00',
    duration: 1759,
    walkDistance: 1124.3736153948719,
    legs: [
      {
        transportMode: 'foot',
        duration: 599,
        distance: 723.439,
        startTime: '2021-05-18T11:26:01+00:00',
        line: null,
        lineDirection: null,
        numStops: 0,
        fromPlaceName: 'Origin',
        toPlaceName: 'Bodø lufthavn',
        polyLine: {
          length: 39,
          code: 'iaryK}arvAMqAKiAGi@Eg@Iu@WeCU}BE_@m@eGOsBIsAIuAE_BEiAAiACgBEuHEcJIuMBABA?U@OBKDIFEPAFAFAFADCDE@G@IBOBk@?oAEiF',
        },
      },
      {
        transportMode: 'bus',
        duration: 124,
        distance: 756.113948473324,
        startTime: '2021-05-18T11:36:00+00:00',
        line: '4',
        lineDirection: 'Høgåsen',
        numStops: 0,
        fromPlaceName: 'Bodø lufthavn',
        toPlaceName: 'Aspmyra',
        polyLine: {
          length: 2,
          code: 'oeryKubuvAwTo}A',
        },
      },
      {
        transportMode: 'bus',
        duration: 355,
        distance: 1448.4747723921184,
        startTime: '2021-05-18T11:43:44+00:00',
        line: '3',
        lineDirection: 'Vollen',
        numStops: 3,
        fromPlaceName: 'Aspmyra',
        toPlaceName: 'Bodø stasjon',
        polyLine: {
          length: 5,
          code: 'g{ryKeaxvAsMnVoGfPeUea@qRkq@',
        },
      },
      {
        transportMode: 'foot',
        duration: 341,
        distance: 400.6550000000001,
        startTime: '2021-05-18T11:49:39+00:00',
        line: null,
        lineDirection: null,
        numStops: 0,
        fromPlaceName: 'Bodø stasjon',
        toPlaceName: 'Destination',
        polyLine: {
          length: 41,
          code: 'c|tyKcmyvAYYEICG@_@@SEWEYEKISCGIEKAEAECKOIQIQIYGYGc@Gq@Is@Gs@IcAGy@MaCKeBM{CEkAIDGBKIw@}@AAGIGKCpAEnAA^?P',
        },
      },
    ],
  },
  {
    startTime: '2021-05-18T11:17:33+00:00',
    duration: 2449,
    walkDistance: 2902.3380000216403,
    legs: [
      {
        transportMode: 'foot',
        duration: 2449,
        distance: 2901.748,
        startTime: '2021-05-18T11:17:33+00:00',
        line: null,
        lineDirection: null,
        numStops: 0,
        fromPlaceName: 'Origin',
        toPlaceName: 'Destination',
        polyLine: {
          length: 162,
          code: 'iaryK}arvAMqA[ZMLK@EACAUo@GSi@wBq@qCq@mCESw@qDc@oCe@uCUwACMMy@QkAcCkO}@mFmBoJw@gEk@qCsByJ}AcHMe@MA{Eg@KDQVUZIFGBG?IAeBcAs@a@YQIGEGES[wAQq@eBaIEOqByI[sAI]CMCMc@uB{@oDGUIa@EUQ{@q@uDEYmAyGE[Ig@SgASwAEUY{BOqAEc@Gc@C_@CUC_@e@eFC]C_@KkAAK]wEC_@KLeB~AG@GECGAQs@iKCc@QHMDMBKCQOAGEKEQCOCe@Cs@KiCCm@GMGIIEEAAFAFCDEDC@E?CCCCCEAGIECCCCGEIEGEKIOU??c@Ya@]Qk@GSGU?K?IAKAICGCGCCCCE?C@WYQg@O]Ii@Im@Is@QgBOuBK{AIyAI{ACaAKoCGBKIw@}@AAGIGKCpAEnAA^?P',
        },
      },
    ],
  },
]

function getTestTransportTime(
  transportMode: 'bike' | 'walk' | 'publictransport'
): Promise<any> {
  let response
  if (transportMode === 'bike') response = testBikeResponse
  else if (transportMode === 'publictransport')
    response = testPublicTransportResponse
  else if (transportMode === 'walk') response = testWalkResponse
  return new Promise((resolve, reject) => resolve(response))
}
export { getTestTransportTime }
