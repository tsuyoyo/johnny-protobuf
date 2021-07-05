///
//  Generated code. Do not modify.
//  source: proto/login.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use postSignupRequestDescriptor instead')
const PostSignupRequest$json = const {
  '1': 'PostSignupRequest',
  '2': const [
    const {'1': 'token', '3': 1, '4': 1, '5': 9, '10': 'token'},
    const {'1': 'name', '3': 2, '4': 1, '5': 9, '10': 'name'},
  ],
};

/// Descriptor for `PostSignupRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List postSignupRequestDescriptor = $convert.base64Decode('ChFQb3N0U2lnbnVwUmVxdWVzdBIUCgV0b2tlbhgBIAEoCVIFdG9rZW4SEgoEbmFtZRgCIAEoCVIEbmFtZQ==');
@$core.Deprecated('Use postSignupResponseDescriptor instead')
const PostSignupResponse$json = const {
  '1': 'PostSignupResponse',
  '2': const [
    const {'1': 'player', '3': 1, '4': 1, '5': 11, '6': '.pj.sakuchin.percussion.proto.Player', '10': 'player'},
  ],
};

/// Descriptor for `PostSignupResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List postSignupResponseDescriptor = $convert.base64Decode('ChJQb3N0U2lnbnVwUmVzcG9uc2USPAoGcGxheWVyGAEgASgLMiQucGouc2FrdWNoaW4ucGVyY3Vzc2lvbi5wcm90by5QbGF5ZXJSBnBsYXllcg==');
@$core.Deprecated('Use postLoginRequestDescriptor instead')
const PostLoginRequest$json = const {
  '1': 'PostLoginRequest',
  '2': const [
    const {'1': 'token', '3': 1, '4': 1, '5': 9, '10': 'token'},
  ],
};

/// Descriptor for `PostLoginRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List postLoginRequestDescriptor = $convert.base64Decode('ChBQb3N0TG9naW5SZXF1ZXN0EhQKBXRva2VuGAEgASgJUgV0b2tlbg==');
@$core.Deprecated('Use postLoginResponseDescriptor instead')
const PostLoginResponse$json = const {
  '1': 'PostLoginResponse',
  '2': const [
    const {'1': 'player', '3': 1, '4': 1, '5': 11, '6': '.pj.sakuchin.percussion.proto.Player', '10': 'player'},
  ],
};

/// Descriptor for `PostLoginResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List postLoginResponseDescriptor = $convert.base64Decode('ChFQb3N0TG9naW5SZXNwb25zZRI8CgZwbGF5ZXIYASABKAsyJC5wai5zYWt1Y2hpbi5wZXJjdXNzaW9uLnByb3RvLlBsYXllclIGcGxheWVy');
