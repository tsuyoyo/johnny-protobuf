///
//  Generated code. Do not modify.
//  source: proto/userService.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use signupUserRequestDescriptor instead')
const SignupUserRequest$json = const {
  '1': 'SignupUserRequest',
  '2': const [
    const {'1': 'token', '3': 1, '4': 1, '5': 9, '10': 'token'},
  ],
};

/// Descriptor for `SignupUserRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List signupUserRequestDescriptor = $convert.base64Decode('ChFTaWdudXBVc2VyUmVxdWVzdBIUCgV0b2tlbhgBIAEoCVIFdG9rZW4=');
@$core.Deprecated('Use signupUserResponseDescriptor instead')
const SignupUserResponse$json = const {
  '1': 'SignupUserResponse',
  '2': const [
    const {'1': 'user', '3': 1, '4': 1, '5': 11, '6': '.pj.sakuchin.percussion.proto.User', '10': 'user'},
  ],
};

/// Descriptor for `SignupUserResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List signupUserResponseDescriptor = $convert.base64Decode('ChJTaWdudXBVc2VyUmVzcG9uc2USNgoEdXNlchgBIAEoCzIiLnBqLnNha3VjaGluLnBlcmN1c3Npb24ucHJvdG8uVXNlclIEdXNlcg==');
@$core.Deprecated('Use postUserLoginRequestDescriptor instead')
const PostUserLoginRequest$json = const {
  '1': 'PostUserLoginRequest',
  '2': const [
    const {'1': 'token', '3': 1, '4': 1, '5': 9, '10': 'token'},
  ],
};

/// Descriptor for `PostUserLoginRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List postUserLoginRequestDescriptor = $convert.base64Decode('ChRQb3N0VXNlckxvZ2luUmVxdWVzdBIUCgV0b2tlbhgBIAEoCVIFdG9rZW4=');
@$core.Deprecated('Use postUserLoginResponseDescriptor instead')
const PostUserLoginResponse$json = const {
  '1': 'PostUserLoginResponse',
  '2': const [
    const {'1': 'user', '3': 1, '4': 1, '5': 11, '6': '.pj.sakuchin.percussion.proto.User', '10': 'user'},
  ],
};

/// Descriptor for `PostUserLoginResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List postUserLoginResponseDescriptor = $convert.base64Decode('ChVQb3N0VXNlckxvZ2luUmVzcG9uc2USNgoEdXNlchgBIAEoCzIiLnBqLnNha3VjaGluLnBlcmN1c3Npb24ucHJvdG8uVXNlclIEdXNlcg==');
@$core.Deprecated('Use getUserProfileResponseDescriptor instead')
const GetUserProfileResponse$json = const {
  '1': 'GetUserProfileResponse',
  '2': const [
    const {'1': 'user', '3': 1, '4': 1, '5': 11, '6': '.pj.sakuchin.percussion.proto.User', '10': 'user'},
    const {'1': 'userProfile', '3': 2, '4': 1, '5': 11, '6': '.pj.sakuchin.percussion.proto.UserProfile', '10': 'userProfile'},
  ],
};

/// Descriptor for `GetUserProfileResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getUserProfileResponseDescriptor = $convert.base64Decode('ChZHZXRVc2VyUHJvZmlsZVJlc3BvbnNlEjYKBHVzZXIYASABKAsyIi5wai5zYWt1Y2hpbi5wZXJjdXNzaW9uLnByb3RvLlVzZXJSBHVzZXISSwoLdXNlclByb2ZpbGUYAiABKAsyKS5wai5zYWt1Y2hpbi5wZXJjdXNzaW9uLnByb3RvLlVzZXJQcm9maWxlUgt1c2VyUHJvZmlsZQ==');
@$core.Deprecated('Use putUserProfileRequestDescriptor instead')
const PutUserProfileRequest$json = const {
  '1': 'PutUserProfileRequest',
  '2': const [
    const {'1': 'user', '3': 1, '4': 1, '5': 11, '6': '.pj.sakuchin.percussion.proto.User', '10': 'user'},
    const {'1': 'userProfile', '3': 2, '4': 1, '5': 11, '6': '.pj.sakuchin.percussion.proto.UserProfile', '10': 'userProfile'},
  ],
};

/// Descriptor for `PutUserProfileRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List putUserProfileRequestDescriptor = $convert.base64Decode('ChVQdXRVc2VyUHJvZmlsZVJlcXVlc3QSNgoEdXNlchgBIAEoCzIiLnBqLnNha3VjaGluLnBlcmN1c3Npb24ucHJvdG8uVXNlclIEdXNlchJLCgt1c2VyUHJvZmlsZRgCIAEoCzIpLnBqLnNha3VjaGluLnBlcmN1c3Npb24ucHJvdG8uVXNlclByb2ZpbGVSC3VzZXJQcm9maWxl');
@$core.Deprecated('Use putUserCityRequestDescriptor instead')
const PutUserCityRequest$json = const {
  '1': 'PutUserCityRequest',
  '2': const [
    const {'1': 'cities', '3': 1, '4': 3, '5': 11, '6': '.pj.sakuchin.percussion.proto.City', '10': 'cities'},
  ],
};

/// Descriptor for `PutUserCityRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List putUserCityRequestDescriptor = $convert.base64Decode('ChJQdXRVc2VyQ2l0eVJlcXVlc3QSOgoGY2l0aWVzGAEgAygLMiIucGouc2FrdWNoaW4ucGVyY3Vzc2lvbi5wcm90by5DaXR5UgZjaXRpZXM=');
@$core.Deprecated('Use getUserCityResponseDescriptor instead')
const GetUserCityResponse$json = const {
  '1': 'GetUserCityResponse',
  '2': const [
    const {'1': 'cities', '3': 1, '4': 3, '5': 11, '6': '.pj.sakuchin.percussion.proto.City', '10': 'cities'},
  ],
};

/// Descriptor for `GetUserCityResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getUserCityResponseDescriptor = $convert.base64Decode('ChNHZXRVc2VyQ2l0eVJlc3BvbnNlEjoKBmNpdGllcxgBIAMoCzIiLnBqLnNha3VjaGluLnBlcmN1c3Npb24ucHJvdG8uQ2l0eVIGY2l0aWVz');
