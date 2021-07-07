///
//  Generated code. Do not modify.
//  source: proto/suggestService.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'area.pb.dart' as $0;

class GetSuggestCityResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetSuggestCityResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$0.City>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'cities', $pb.PbFieldType.PM, subBuilder: $0.City.create)
    ..hasRequiredFields = false
  ;

  GetSuggestCityResponse._() : super();
  factory GetSuggestCityResponse({
    $core.Iterable<$0.City>? cities,
  }) {
    final _result = create();
    if (cities != null) {
      _result.cities.addAll(cities);
    }
    return _result;
  }
  factory GetSuggestCityResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetSuggestCityResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetSuggestCityResponse clone() => GetSuggestCityResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetSuggestCityResponse copyWith(void Function(GetSuggestCityResponse) updates) => super.copyWith((message) => updates(message as GetSuggestCityResponse)) as GetSuggestCityResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetSuggestCityResponse create() => GetSuggestCityResponse._();
  GetSuggestCityResponse createEmptyInstance() => create();
  static $pb.PbList<GetSuggestCityResponse> createRepeated() => $pb.PbList<GetSuggestCityResponse>();
  @$core.pragma('dart2js:noInline')
  static GetSuggestCityResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetSuggestCityResponse>(create);
  static GetSuggestCityResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$0.City> get cities => $_getList(0);
}

