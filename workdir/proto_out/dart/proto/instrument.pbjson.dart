///
//  Generated code. Do not modify.
//  source: proto/instrument.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use instrumentDescriptor instead')
const Instrument$json = const {
  '1': 'Instrument',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 5, '10': 'id'},
    const {'1': 'name', '3': 2, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'authorId', '3': 3, '4': 1, '5': 9, '10': 'authorId'},
  ],
};

/// Descriptor for `Instrument`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List instrumentDescriptor = $convert.base64Decode('CgpJbnN0cnVtZW50Eg4KAmlkGAEgASgFUgJpZBISCgRuYW1lGAIgASgJUgRuYW1lEhoKCGF1dGhvcklkGAMgASgJUghhdXRob3JJZA==');
@$core.Deprecated('Use postInstrumentRequestDescriptor instead')
const PostInstrumentRequest$json = const {
  '1': 'PostInstrumentRequest',
  '2': const [
    const {'1': 'name', '3': 1, '4': 1, '5': 9, '10': 'name'},
  ],
};

/// Descriptor for `PostInstrumentRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List postInstrumentRequestDescriptor = $convert.base64Decode('ChVQb3N0SW5zdHJ1bWVudFJlcXVlc3QSEgoEbmFtZRgBIAEoCVIEbmFtZQ==');
@$core.Deprecated('Use getInstrumentByIdResoponseDescriptor instead')
const GetInstrumentByIdResoponse$json = const {
  '1': 'GetInstrumentByIdResoponse',
  '2': const [
    const {'1': 'instrument', '3': 1, '4': 1, '5': 11, '6': '.pj.sakuchin.percussion.proto.Instrument', '10': 'instrument'},
  ],
};

/// Descriptor for `GetInstrumentByIdResoponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getInstrumentByIdResoponseDescriptor = $convert.base64Decode('ChpHZXRJbnN0cnVtZW50QnlJZFJlc29wb25zZRJICgppbnN0cnVtZW50GAEgASgLMigucGouc2FrdWNoaW4ucGVyY3Vzc2lvbi5wcm90by5JbnN0cnVtZW50UgppbnN0cnVtZW50');
@$core.Deprecated('Use putInstrumentByIdRequestDescriptor instead')
const PutInstrumentByIdRequest$json = const {
  '1': 'PutInstrumentByIdRequest',
  '2': const [
    const {'1': 'instrument', '3': 1, '4': 1, '5': 11, '6': '.pj.sakuchin.percussion.proto.Instrument', '10': 'instrument'},
  ],
};

/// Descriptor for `PutInstrumentByIdRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List putInstrumentByIdRequestDescriptor = $convert.base64Decode('ChhQdXRJbnN0cnVtZW50QnlJZFJlcXVlc3QSSAoKaW5zdHJ1bWVudBgBIAEoCzIoLnBqLnNha3VjaGluLnBlcmN1c3Npb24ucHJvdG8uSW5zdHJ1bWVudFIKaW5zdHJ1bWVudA==');
@$core.Deprecated('Use getInstrumentsResponseDescriptor instead')
const GetInstrumentsResponse$json = const {
  '1': 'GetInstrumentsResponse',
  '2': const [
    const {'1': 'instruments', '3': 1, '4': 3, '5': 11, '6': '.pj.sakuchin.percussion.proto.Instrument', '10': 'instruments'},
  ],
};

/// Descriptor for `GetInstrumentsResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getInstrumentsResponseDescriptor = $convert.base64Decode('ChZHZXRJbnN0cnVtZW50c1Jlc3BvbnNlEkoKC2luc3RydW1lbnRzGAEgAygLMigucGouc2FrdWNoaW4ucGVyY3Vzc2lvbi5wcm90by5JbnN0cnVtZW50UgtpbnN0cnVtZW50cw==');
@$core.Deprecated('Use getInstrumentHistoryEditResponseDescriptor instead')
const GetInstrumentHistoryEditResponse$json = const {
  '1': 'GetInstrumentHistoryEditResponse',
  '2': const [
    const {'1': 'history', '3': 1, '4': 3, '5': 11, '6': '.pj.sakuchin.percussion.proto.EditHistory', '10': 'history'},
  ],
};

/// Descriptor for `GetInstrumentHistoryEditResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getInstrumentHistoryEditResponseDescriptor = $convert.base64Decode('CiBHZXRJbnN0cnVtZW50SGlzdG9yeUVkaXRSZXNwb25zZRJDCgdoaXN0b3J5GAEgAygLMikucGouc2FrdWNoaW4ucGVyY3Vzc2lvbi5wcm90by5FZGl0SGlzdG9yeVIHaGlzdG9yeQ==');
